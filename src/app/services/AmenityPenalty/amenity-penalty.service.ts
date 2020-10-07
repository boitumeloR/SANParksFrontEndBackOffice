import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddAmenityPenaltySuccessfulComponent} from 'src/app/modals/amenity-penalty/add-amenity-penalty-successful/add-amenity-penalty-successful.component';
import {AddAmenityPenaltyUnsuccessfulComponent} from 'src/app/modals/amenity-penalty/add-amenity-penalty-unsuccessful/add-amenity-penalty-unsuccessful.component';
import {UpdateAmenityPenaltySuccessfulComponent} from 'src/app/modals/amenity-penalty/update-amenity-penalty-successful/update-amenity-penalty-successful.component';
import {UpdateAmenityPenaltyUnsuccessfulComponent} from 'src/app/modals/amenity-penalty/update-amenity-penalty-unsuccessful/update-amenity-penalty-unsuccessful.component';
import { DeleteAmenityPenaltySuccessfulComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty-successful/delete-amenity-penalty-successful.component';
import { DeleteAmenityPenaltyUnsuccessfulComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty-unsuccessful/delete-amenity-penalty-unsuccessful.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface AmenityPenalty{
  PenaltyID: number;
  AmenityID: number;
  AccommodationTypeID: number;
  AccommodationID: number;
  UnitNumber: number;
  CampID: number;
  AmenityStatusID: number;
  AmenityDescription: string;
  AmenityPenaltyAmount: number;
  DateEffective: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AmenityPenaltyService {

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  constructor(private dialog: MatDialog , private http: HttpClient,
              private router: Router, private rateForYear: MatSnackBar) { }

  createAmenityPenalty(AmenityPenalty, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenityPenalty/createAmenityPenalty`, AmenityPenalty).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addAmenityPenaltyUnsuccessfulDialog = this.dialog.open(AddAmenityPenaltyUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.RateForYearExists){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.rateExistsError(AmenityPenalty.DateEffective);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addAmenityPenaltySuccessfulDialog = this.dialog.open(AddAmenityPenaltySuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
  rateExistsError(year) {
    this.rateForYear.open(`An amenity penalty already exists for this specific amenity in the year ${year}.` , 'OK', {
      duration: 5000,
    });
  }
  readAmenityPenalty(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/amenityPenalty/getAmenityPenalty`, user);
  }
  updateAmenityPenalty(updatedAmenityPenalty, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenityPenalty/updateAmenityPenalty`, updatedAmenityPenalty).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateAmenityPenaltyUnsuccessfulDialog = this.dialog.open(UpdateAmenityPenaltyUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.RateForYearExists){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.rateExistsError(updatedAmenityPenalty.DateEffective);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateAmenityPenaltySuccessfulDialog = this.dialog.open(UpdateAmenityPenaltySuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
  deleteAmenityPenalty(user, PenaltyID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/amenityPenalty/deleteAmenityPenalty?amenityPenaltyID=${PenaltyID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteAmenityPenaltyUnsuccessfulDialog = this.dialog.open(DeleteAmenityPenaltyUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteAmenityPenaltySuccessfulDialog = this.dialog.open(DeleteAmenityPenaltySuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
}
