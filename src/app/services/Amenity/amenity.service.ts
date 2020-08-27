import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddAmenitySuccessfulComponent} from 'src/app/modals/amenity/add-amenity-successful/add-amenity-successful.component';
import {AddAmenityUnsuccessfulComponent} from 'src/app/modals/amenity/add-amenity-unsuccessful/add-amenity-unsuccessful.component';
import {UpdateAmenitySuccessfulComponent} from 'src/app/modals/amenity/update-amenity-successful/update-amenity-successful.component';
import {UpdateAmenityUnsuccessfulComponent} from 'src/app/modals/amenity/update-amenity-unsuccessful/update-amenity-unsuccessful.component';
import { DeleteAmenitySuccessfulComponent } from 'src/app/modals/amenity/delete-amenity-successful/delete-amenity-successful.component';
import { DeleteAmenityUnsuccessfulComponent } from 'src/app/modals/amenity/delete-amenity-unsuccessful/delete-amenity-unsuccessful.component';

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

  constructor(private dialog: MatDialog , private http: HttpClient) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAmenity(Amenity, link){
    return this.http.post(`${link}/api/amenity/createAmenity`, Amenity).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAmenityUnsuccessfulDialog = this.dialog.open(AddAmenityUnsuccessfulComponent);
      }
      else{
        const addAmenitySuccessfulDialog = this.dialog.open(AddAmenitySuccessfulComponent);
      }
    });
  }
  readAmenity(link){
    return this.http.get(`${link}/api/amenity/getAmenity`);
  }
  updateAmenity(updatedAmenity, link){
    return this.http.post(`${link}/api/amenity/updateAmenity`, updatedAmenity).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAmenityUnsuccessfulDialog = this.dialog.open(UpdateAmenityUnsuccessfulComponent);
      }
      else{
        const updateAmenitySuccessfulDialog = this.dialog.open(UpdateAmenitySuccessfulComponent);
      }
    });
  }
  deleteAmenity(AmenityID, link){
    return this.http.delete(`${link}/api/amenity/deleteAmenity?amenityID=${AmenityID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAmenityUnsuccessfulDialog = this.dialog.open(DeleteAmenityUnsuccessfulComponent);
      }
      else{
        const deleteAmenitySuccessfulDialog = this.dialog.open(DeleteAmenitySuccessfulComponent);
      }
    });
  }
  readAmenityStatus(link){
    return this.http.get(`${link}/api/amenity/getAmenityStatus`);
  }
}
