import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/add-accomodation-successful/add-accomodation-successful.component';
import {AddAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/add-accomodation-unsuccessful/add-accomodation-unsuccessful.component';
import {UpdateAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/update-accomodation-successful/update-accomodation-successful.component';
import {UpdateAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/update-accomodation-unsuccessful/update-accomodation-unsuccessful.component';
import {DeleteAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/delete-accomodation-successful/delete-accomodation-successful.component';
import {DeleteAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/delete-accomodation-unsuccessful/delete-accomodation-unsuccessful.component';


export interface Accommodation{
  AccommodationID: number;
  UnitNumber: number;
  AccomodationTypeID: number;
  AccomodationType: string;
  CampID: number;
  Camp: string;
  ParkName: string;
}


@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private dialog: MatDialog , private http: HttpClient ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAccommodation(Accommodation, link){
    return this.http.post(`${link}/api/accommodation/createAccommodation`, Accommodation).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAccomodationUnsuccessfulDialog = this.dialog.open(AddAccomodationUnsuccessfulComponent);
      }
      else{
        const addAccomodationSuccessfulDialog = this.dialog.open(AddAccomodationSuccessfulComponent);
      }
    });
  }
  readAccommodation(link){
    return this.http.get(`${link}/api/accommodation/getAccommodations`);
  }
  updateAccommodation(updatedAccommodation, link){
    return this.http.post(`${link}/api/accommodation/updateAccommodation`, updatedAccommodation).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAccomodationUnsuccessfulDialog = this.dialog.open(UpdateAccomodationUnsuccessfulComponent);
      }
      else{
        const updateAccomodationSuccessfulDialog = this.dialog.open(UpdateAccomodationSuccessfulComponent);
      }
    });
  }
  deleteAccommodation(AccommodationID, link){
    return this.http.delete(`${link}/api/accommodation/deleteAccommodation?accommodationID=${AccommodationID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAccomodationUnsuccessfulDialog = this.dialog.open(DeleteAccomodationUnsuccessfulComponent);
      }
      else{
        const deleteAccomodationSuccessfulDialog = this.dialog.open(DeleteAccomodationSuccessfulComponent);
      }
    });
  }

}
