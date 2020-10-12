import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddAmenitySuccessfulComponent} from 'src/app/modals/amenity/add-amenity-successful/add-amenity-successful.component';
import {AddAmenityUnsuccessfulComponent} from 'src/app/modals/amenity/add-amenity-unsuccessful/add-amenity-unsuccessful.component';
import {UpdateAmenitySuccessfulComponent} from 'src/app/modals/amenity/update-amenity-successful/update-amenity-successful.component';
import {UpdateAmenityUnsuccessfulComponent} from 'src/app/modals/amenity/update-amenity-unsuccessful/update-amenity-unsuccessful.component';
import { DeleteAmenitySuccessfulComponent } from 'src/app/modals/amenity/delete-amenity-successful/delete-amenity-successful.component';
import { DeleteAmenityUnsuccessfulComponent } from 'src/app/modals/amenity/delete-amenity-unsuccessful/delete-amenity-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AmenityAddedComponent} from 'src/app/workflows/amenity-added/amenity-added.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface Amenity{
  PenaltyID: number;
  AmenityID: number;
  AmenityTypeID: number;
  AccommodationTypeID: number;
  AccommodationID: number;
  UnitNumber: number;
  CampID: number;
  AmenityStatusID: number;
  AmenityDescription: string;
}

@Injectable({
  providedIn: 'root'
})
export class AmenityService {

  constructor(private dialog: MatDialog , private http: HttpClient,
              private router: Router,  private bottomSheet: MatBottomSheet, private snackbar: MatSnackBar) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  createAmenity(Amenity, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenity/createAmenity`, Amenity).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAmenityUnsuccessfulDialog = this.dialog.open(AddAmenityUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.dialog.open(AddAmenityUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addAmenitySuccessfulDialog = this.dialog.open(AddAmenitySuccessfulComponent);
        this.refresh.next();

        addAmenitySuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(AmenityAddedComponent);
         });
        }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  readAmenity(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/amenity/getAmenity`, user);
  }
  updateAmenity(updatedAmenity, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenity/updateAmenity`, updatedAmenity).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateAmenityUnsuccessfulDialog = this.dialog.open(UpdateAmenityUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateAmenitySuccessfulDialog = this.dialog.open(UpdateAmenitySuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  deleteAmenity(user,AmenityID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenity/deleteAmenity?amenityID=${AmenityID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteAmenityUnsuccessfulDialog = this.dialog.open(DeleteAmenityUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteAmenitySuccessfulDialog = this.dialog.open(DeleteAmenitySuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  readAmenityStatus(link){
    return this.http.get(`${link}/api/amenity/getAmenityStatus`);
  }

  readAmenityInUnit(unitNumber, campID, accTypeID, link){
    return this.http.get(`${link}/api/amenity/getAmenitiesWithinUnit?unitNumber=${unitNumber}&accTypeID=${accTypeID}&campID=${campID}`);
  }
}
