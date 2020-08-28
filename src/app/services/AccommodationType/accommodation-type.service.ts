import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-successful/add-accomodation-type-successful.component';
import {AddAccomodationTypeUnsuccessfulComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-unsuccessful/add-accomodation-type-unsuccessful.component';
import { UpdateAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/update-accomodation-type-successful/update-accomodation-type-successful.component';
import { UpdateAccomodationTypeUnsuccessfulComponent} from 'src/app/modals/accomodation-type/update-accomodation-type-unsuccessful/update-accomodation-type-unsuccessful.component';
import { DeleteAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/delete-accomodation-type-successful/delete-accomodation-type-successful.component';
import { DeleteAccomodationTypeUnsuccessfulComponent} from 'src/app/modals/accomodation-type/delete-accomodation-type-unsuccessful/delete-accomodation-type-unsuccessful.component';

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

  constructor(private dialog: MatDialog, private http: HttpClient ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAccommodationType(accommodationType, link: string){
    return this.http.post(`${link}/api/accommodationType/dummyFile`, accommodationType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAccomodationTypeUnsuccessfulDialog = this.dialog.open(AddAccomodationTypeUnsuccessfulComponent);
      }
      else{
        const addAccomodationTypeSuccessfulDialog = this.dialog.open(AddAccomodationTypeSuccessfulComponent);
      }
    });
  }
  readAccommodationType(link){
    return this.http.get(`${link}/api/accommodationType/getAccommodationType`);
  }
  updateAccommodationType(updatedAccommodationType, link){
    return this.http.post(`${link}/api/accommodationType/updateAccommodationType`, updatedAccommodationType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAccomodationTypeUnsuccessfulDialog = this.dialog.open(UpdateAccomodationTypeUnsuccessfulComponent);
      }
      else{
        const updateAccomodationTypeSuccessfulDialog = this.dialog.open(UpdateAccomodationTypeSuccessfulComponent);
      }
    });
  }
  deleteAccommodationType(AccommodationTypeID, link){
    return this.http.delete(`${link}/api/accommodationType/deleteAccommodationType?accommodationTypeID=${AccommodationTypeID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAccomodationTypeUnsuccessfulDialog = this.dialog.open(DeleteAccomodationTypeUnsuccessfulComponent);
      }
      else{
        const deleteAccomodationTypeSuccessfulDialog = this.dialog.open(DeleteAccomodationTypeSuccessfulComponent);
      }
    });
  }
  getAccomomodationTypesForCamp(campID, link){
    return this.http.get(`${link}/api/accommodationType/getAccommodationTypeForCamp?campID=${campID}`);
  }

}
