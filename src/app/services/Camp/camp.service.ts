import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {AddCampSuccessfulComponent} from 'src/app/modals/camp/add-camp-successful/add-camp-successful.component';
import {AddCampUnsuccessfulComponent} from 'src/app/modals/camp/add-camp-unsuccessful/add-camp-unsuccessful.component';
import {UpdateCampSuccessfulComponent} from 'src/app/modals/camp/update-camp-successful/update-camp-successful.component';
import {UpdateCampUnsuccessfulComponent} from 'src/app/modals/camp/update-camp-unsuccessful/update-camp-unsuccessful.component';
import { DeleteCampSuccessfulComponent } from 'src/app/modals/camp/delete-camp-successful/delete-camp-successful.component';
import { DeleteCampUnsuccessfulComponent } from 'src/app/modals/camp/delete-camp-unsuccessful/delete-camp-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CampaddedComponent} from 'src/app/workflows/campadded/campadded.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface Camp{
  CampID: number;
  ParkID: number;
  CampTypeID: number;
  CampDescription: string;
  CampLatitude: string;
  CampLongitude: string;
  CampName: string;
}

export interface CampDropDown{
  CampID: number;
  CampName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampService {

  constructor(private global: GlobalService , private http: HttpClient, private dialog: MatDialog,
              private router: Router, private bottomSheet: MatBottomSheet, private snackbar: MatSnackBar) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  createCamp(Camp, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/Camp/createCamp`, Camp).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addCampUnsuccessfulDialog = this.dialog.open(AddCampUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addCampSuccessfulDialog = this.dialog.open(AddCampSuccessfulComponent);
        this.refresh.next();

        addCampSuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(CampaddedComponent);
         });
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  readCamp(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/Camp/getCamp`, user);
  }
  updateCamp(updatedCamp, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/Camp/updateCamp`, updatedCamp).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateCampUnsuccessfulDialog = this.dialog.open(UpdateCampUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateCampSuccessfulDialog = this.dialog.open(UpdateCampSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  deleteCamp(user, CampID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/Camp/deleteCamp?campID=${CampID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampUnsuccessfulDialog = this.dialog.open(DeleteCampUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampSuccessfulDialog = this.dialog.open(DeleteCampSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  getCampsForSpecificPark(parkID, link){
    return this.http.get(`${link}/api/Camp/getCampsForPark?parkID=${parkID}`);
  }
}
