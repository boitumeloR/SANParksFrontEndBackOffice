import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/add-camp-type-successful/add-camp-type-successful.component';
import { AddCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/add-camp-type-unsuccessful/add-camp-type-unsuccessful.component';
import { UpdateCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/update-camp-type-successful/update-camp-type-successful.component';
import { UpdateCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/update-camp-type-unsuccessful/update-camp-type-unsuccessful.component';
import { DeleteCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/delete-camp-type-successful/delete-camp-type-successful.component';
import { DeleteCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/delete-camp-type-unsuccessful/delete-camp-type-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {CamptypeaddedComponent} from 'src/app/workflows/camptypeadded/camptypeadded.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface CampType {
  CampTypeID: number;
  CampTypeDescription: string;
  CampTypeName: string;
}
// Camp
export interface CampTypeDropDown {
  CampTypeID: number;
  CampTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampTypeService {
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router,
              private bottomSheet: MatBottomSheet, private snackbar: MatSnackBar) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  CreateCampType(CampType, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/CampType/CreateCampType`, CampType).subscribe((addResult: any) => {
      if (addResult.Error){
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addCampTypeUnsuccessfulDialog = this.dialog.open(AddCampTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addCampTypeSuccessfulDialog = this.dialog.open(AddCampTypeSuccessfulComponent);
       this.refresh.next();

       addCampTypeSuccessfulDialog.afterClosed().subscribe(() => {
        const parkFlowSheet =  this.bottomSheet.open(CamptypeaddedComponent);
       });
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  ReadCampType(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/CampType/getCampType`, user);
  }

  UpdateCampType(CampType, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/CampType/UpdateCampType`, CampType).subscribe((UpdateResult: any) => {
      if (UpdateResult.Error){
       localStorage.setItem('user', JSON.stringify(UpdateResult.user));
       const updateCampTypeUnsuccessfulDialog = this.dialog.open(UpdateCampTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (UpdateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(UpdateResult.user));
       const updateCampTypeSuccessfulDialog = this.dialog.open(UpdateCampTypeSuccessfulComponent);
       this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  DeleteCampType(user, CampTypeID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/CampType/DeleteCampType?campTypeID=${CampTypeID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampTypeUnsuccessfulDialog = this.dialog.open(DeleteCampTypeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampTypeSuccessfulDialog = this.dialog.open(DeleteCampTypeSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
}
