import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddAccomodationBaseRateSuccessfulComponent} from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate-successful/add-accomodation-base-rate-successful.component';
import {AddAccomodationBaseRateUnsuccessfulComponent} from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate-unsuccessful/add-accomodation-base-rate-unsuccessful.component';
import {UpdateAccomodationBaseRateSuccessfulComponent} from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate-successful/update-accomodation-base-rate-successful.component';
import {UpdateAccomodationBaseRateUnsuccessfulComponent} from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate-unsuccessful/update-accomodation-base-rate-unsuccessful.component';
import {DeleteAccomodationBaseRateSuccessfulComponent} from 'src/app/modals/accomodation-base-rate/delete-accomodation-base-rate-successful/delete-accomodation-base-rate-successful.component';
import {DeleteAccomodationBaseRateUnsuccessfulComponent} from 'src/app/modals/accomodation-base-rate/delete-accomodation-base-rate-unsuccessful/delete-accomodation-base-rate-unsuccessful.component';
import { Router } from '@angular/router';

export interface AccommodationTypeBaseRate{
  BaseRateID: number;
  AccomodationTypeID: number;
  CampID: number;
  BaseRateAmount: number;
 StartDate: Date;
 EndDate: Date;
 }

@Injectable({
  providedIn: 'root'
})
export class AccommBaseRateService {

  constructor(private dialog: MatDialog, private http: HttpClient,
              private router: Router ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }


  createAccommodationTypeBaseRate(AccommodationTypeBaseRate, link){
    return this.http.post(`${link}/api/AccommodationBaseRate/createBaseRate`, AccommodationTypeBaseRate).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(AddAccomodationBaseRateUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const addAccomodationBaseRateSuccessfulDialog = this.dialog.open(AddAccomodationBaseRateSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.refresh.next();
      }
    });
  }
  readAccommodationTypeBaseRate(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/AccommodationBaseRate/getBaseRate`, user);
  }
  updateAccommodationTypeBaseRate(updatedAccommodationTypeBaseRate, link){
    return this.http.post(`${link}/api/AccommodationBaseRate/updateBaseRate`, updatedAccommodationTypeBaseRate)
    .subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(UpdateAccomodationBaseRateUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const updateAccomodationBaseRateSuccessfulDialog = this.dialog.open(UpdateAccomodationBaseRateSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.refresh.next();
      }
    });
  }
  deleteAccommodationTypeBaseRate(user, BaseRateID, link){
    return this.http.post(`${link}/api/AccommodationBaseRate/deleteBaseRate?baseRateID=${BaseRateID}`, user)
    .subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(DeleteAccomodationBaseRateUnsuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        const deleteAccomodationAddRateSuccessfulDialog = this.dialog.open(DeleteAccomodationBaseRateSuccessfulComponent);
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        this.refresh.next();
      }
    });
  }
}
