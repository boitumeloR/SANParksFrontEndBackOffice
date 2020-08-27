import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddAmenityPenaltySuccessfulComponent} from 'src/app/modals/amenity-penalty/add-amenity-penalty-successful/add-amenity-penalty-successful.component';
import {AddAmenityPenaltyUnsuccessfulComponent} from 'src/app/modals/amenity-penalty/add-amenity-penalty-unsuccessful/add-amenity-penalty-unsuccessful.component';
import {UpdateAmenityPenaltySuccessfulComponent} from 'src/app/modals/amenity-penalty/update-amenity-penalty-successful/update-amenity-penalty-successful.component';
import {UpdateAmenityPenaltyUnsuccessfulComponent} from 'src/app/modals/amenity-penalty/update-amenity-penalty-unsuccessful/update-amenity-penalty-unsuccessful.component';
import { DeleteAmenityPenaltySuccessfulComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty-successful/delete-amenity-penalty-successful.component';
import { DeleteAmenityPenaltyUnsuccessfulComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty-unsuccessful/delete-amenity-penalty-unsuccessful.component';

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

  constructor(private dialog: MatDialog , private http: HttpClient) { }

  createAmenityPenalty(AmenityPenalty, link){
    return this.http.post(`${link}/api/amenityPenalty/createAmenityPenalty`, AmenityPenalty).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addAmenityPenaltyUnsuccessfulDialog = this.dialog.open(AddAmenityPenaltyUnsuccessfulComponent);
      }
      else{
        const addAmenityPenaltySuccessfulDialog = this.dialog.open(AddAmenityPenaltySuccessfulComponent);
      }
    });
  }
  readAmenityPenalty(link){
    return this.http.get(`${link}/api/amenityPenalty/getAmenityPenalty`);
  }
  updateAmenityPenalty(updatedAmenityPenalty, link){
    return this.http.post(`${link}/api/amenityPenalty/updateAmenityPenalty`, updatedAmenityPenalty).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateAmenityPenaltyUnsuccessfulDialog = this.dialog.open(UpdateAmenityPenaltyUnsuccessfulComponent);
      }
      else{
        const updateAmenityPenaltySuccessfulDialog = this.dialog.open(UpdateAmenityPenaltySuccessfulComponent);
      }
    });
  }
  deleteAmenityPenalty(PenaltyID, link){
    return this.http.delete(`${link}/api/amenityPenalty/deleteAmenityPenalty?amenityPenaltyID=${PenaltyID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAmenityPenaltyUnsuccessfulDialog = this.dialog.open(DeleteAmenityPenaltyUnsuccessfulComponent);
      }
      else{
        const deleteAmenityPenaltySuccessfulDialog = this.dialog.open(DeleteAmenityPenaltySuccessfulComponent);
      }
    });
  }

}
