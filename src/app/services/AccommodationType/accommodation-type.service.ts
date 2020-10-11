import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-successful/add-accomodation-type-successful.component';
import {AddAccomodationTypeUnsuccessfulComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-unsuccessful/add-accomodation-type-unsuccessful.component';
import { UpdateAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/update-accomodation-type-successful/update-accomodation-type-successful.component';
import { UpdateAccomodationTypeUnsuccessfulComponent} from 'src/app/modals/accomodation-type/update-accomodation-type-unsuccessful/update-accomodation-type-unsuccessful.component';
import { DeleteAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/delete-accomodation-type-successful/delete-accomodation-type-successful.component';
import { DeleteAccomodationTypeUnsuccessfulComponent} from 'src/app/modals/accomodation-type/delete-accomodation-type-unsuccessful/delete-accomodation-type-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AccommodationtypeaddedComponent} from 'src/app/workflows/accommodationtypeadded/accommodationtypeadded.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface AccommodationType{
  AccommodationTypeID: number;
  AccTypeName: string;
  AccTypeDescription: string;
  NumBeds: number;
  NumBaths: number;
  AdultLimit: number;
  ChildLimit: number;
}

export interface AccommodationTypeDropDown{
  AccommodationTypeID: number;
  AccTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccommodationTypeService {

  constructor(private dialog: MatDialog, private http: HttpClient,
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

  createAccommodationType(accommodationType, link: string){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/accommodationType/createAccommodationType`, accommodationType).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAccomodationTypeUnsuccessfulDialog = this.dialog.open(AddAccomodationTypeUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const addAccomodationTypeSuccessfulDialog = this.dialog.open(AddAccomodationTypeSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();

        addAccomodationTypeSuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(AccommodationtypeaddedComponent);
         });
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  readAccommodationType(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/accommodationType/getAccommodationType`, user);
  }
  updateAccommodationType(updatedAccommodationType, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/accommodationType/updateAccommodationType`, updatedAccommodationType).
    subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAccomodationTypeUnsuccessfulDialog = this.dialog.open(UpdateAccomodationTypeUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const updatAccomodationTypeSuccessfulDialog = this.dialog.open(UpdateAccomodationTypeSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  deleteAccommodationType(user, AccommodationTypeID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/accommodationType/deleteAccommodationType?accommodationTypeID=${AccommodationTypeID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAccomodationTypeUnsuccessfulDialog = this.dialog.open(DeleteAccomodationTypeUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();

      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const deleteAccomodationTypeSuccessfulDialog = this.dialog.open(DeleteAccomodationTypeSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  getAccomomodationTypesForCamp(campID, link){
    return this.http.get(`${link}/api/accommodationType/getAccommodationTypeForCamp?campID=${campID}`);
  }

}
