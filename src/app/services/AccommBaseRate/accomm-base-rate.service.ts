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

  constructor(private dialog: MatDialog, private http: HttpClient ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }


  createAccommodationTypeBaseRate(AccommodationTypeBaseRate, link){
    return this.http.post(`${link}/api/AccommodationBaseRate/createBaseRate`, AccommodationTypeBaseRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(AddAccomodationBaseRateUnsuccessfulComponent);
      }
      else{
        const addAccomodationBaseRateSuccessfulDialog = this.dialog.open(AddAccomodationBaseRateSuccessfulComponent);
      }
    });
  }
  readAccommodationTypeBaseRate(link){
    return this.http.get(`${link}/api/AccommodationBaseRate/getBaseRate`);
  }
  updateAccommodationTypeBaseRate(updatedAccommodationTypeBaseRate, link){
    return this.http.post(`${link}/api/AccommodationBaseRate/updateBaseRate`, updatedAccommodationTypeBaseRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(UpdateAccomodationBaseRateUnsuccessfulComponent);
      }
      else{
        const updateAccomodationBaseRateSuccessfulDialog = this.dialog.open(UpdateAccomodationBaseRateSuccessfulComponent);
      }
    });
  }
  deleteAccommodationTypeBaseRate(BaseRateID, link){
    return this.http.delete(`${link}/api/AccommodationBaseRate/deleteBaseRate?baseRateID=${BaseRateID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(DeleteAccomodationBaseRateUnsuccessfulComponent);
      }
      else{
        const deleteAccomodationAddRateSuccessfulDialog = this.dialog.open(DeleteAccomodationBaseRateSuccessfulComponent);
      }
    });
  }
}
