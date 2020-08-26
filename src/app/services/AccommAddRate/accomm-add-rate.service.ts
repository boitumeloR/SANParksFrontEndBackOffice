import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddAccomodationAddRateUnsuccessfulComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-unsuccessful/add-accomodation-add-rate-unsuccessful.component';
import {AddAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-successful/add-accomodation-add-rate-successful.component';
import {UpdateAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-successful/update-accomodation-add-rate-successful.component';
import {UpdateAccomodationAddRateUnsuccessfulComponent} from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-unsuccessful/update-accomodation-add-rate-unsuccessful.component';
import {DeleteAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate-successful/delete-accomodation-add-rate-successful.component';
import {DeleteAccomodationAddRateUnsuccessfulComponent} from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate-unsuccessful/delete-accomodation-add-rate-unsuccessful.component';

export interface AccommodationTypeAddRate{
  AddRateID: number;
  AccomodationTypeID: number;
  AdultRateAmount: number;
  ChildRateAmount: number;
 DateEffective: Date;
 }

@Injectable({
  providedIn: 'root'
})
export class AccommAddRateService {

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAccommodationTypeAddRate(AccommodationTypeAddRate, link){
    return this.http.post(`${link}/api/AccommodationAddRate/createAddRate`, AccommodationTypeAddRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAccomodationAddRateUnsuccessfulDialog = this.dialog.open(AddAccomodationAddRateUnsuccessfulComponent);
      }
      else{
        const addAccomodationAddRateSuccessfulDialog = this.dialog.open(AddAccomodationAddRateSuccessfulComponent);
      }
    });
  }
  readAccommodationTypeAddRate(link){
    return this.http.get(`${link}/api/AccommodationAddRate/getAddRate`);
  }
  updateAccommodationTypeAddRate(updatedAccommodationTypeAddRate, link){
    return this.http.post(`${link}/api/AccommodationAddRate/updateAddRate`, updatedAccommodationTypeAddRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAccomodationAddRateUnsuccessfulDialog = this.dialog.open(UpdateAccomodationAddRateUnsuccessfulComponent);
      }
      else{
        const updateAccomodationAddRateSuccessfulDialog = this.dialog.open(UpdateAccomodationAddRateSuccessfulComponent);
      }
    });
  }
  deleteAccommodationTypeAddRate(AddRateID, link){
    return this.http.delete(`${link}/api/AccommodationAddRate/deleteAddRate?addRateID=${AddRateID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAccomodationAddRateUnsuccessfulDialog = this.dialog.open(DeleteAccomodationAddRateUnsuccessfulComponent);
      }
      else{
        const deleteAccomodationAddRateSuccessfulDialog = this.dialog.open(DeleteAccomodationAddRateSuccessfulComponent);
      }
    });
  }
}
