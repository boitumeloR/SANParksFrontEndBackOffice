import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/add-amenity-type-successful/add-amenity-type-successful.component';
import {AddAmenityTypeUnsuccessfulComponent} from 'src/app/modals/amenity-type/add-amenity-type-unsuccessful/add-amenity-type-unsuccessful.component';
import {DeleteAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/delete-amenity-type-successful/delete-amenity-type-successful.component';
import {DeleteAmenityTypeUnsuccessfulComponent} from 'src/app/modals/amenity-type/delete-amenity-type-unsuccessful/delete-amenity-type-unsuccessful.component';
import {UpdateAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/update-amenity-type-successful/update-amenity-type-successful.component';
import {UpdateAmenityTypeUnsuccessfulComponent} from 'src/app/modals/amenity-type/update-amenity-type-unsuccessful/update-amenity-type-unsuccessful.component';


export interface AmenityType{
  AmenityTypeID: number;
  AmenityTypeName: string;
}

export interface AmenityTypeDropDown{
  AmenityTypeID: number;
  AmenityTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AmenityTypeService {
  constructor(private global: GlobalService , private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createAmenityType(AmenityType, link){
    return this.http.post(`${link}/api/amenityType/createAmenityType`, AmenityType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
       const addAmenityTypeUnsuccessfulDialog = this.dialog.open(AddAmenityTypeUnsuccessfulComponent);
      }
      else{
       const addAmenityTypeSuccessfulDialog = this.dialog.open(AddAmenityTypeSuccessfulComponent);
      }
    });
  }

  readAmenityType(link){
    return this.http.get(`${link}/api/amenityType/getAmenityType`);
  }

  updateAmenityType(updatedAmenityType, link){
    return this.http.post(`${link}/api/amenityType/updateAmenityType`, updatedAmenityType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
       const updateAmenityTypeUnsuccessfulDialog = this.dialog.open(UpdateAmenityTypeUnsuccessfulComponent);
      }
      else{
       const updateAmenityTypeSuccessfulDialog = this.dialog.open(UpdateAmenityTypeSuccessfulComponent);
      }
    });
  }

  deleteAmenityType(AmenityTypeID, link){
    return this.http.delete(`${link}/api/amenityType/deleteAmenityType?amenityTypeID=${AmenityTypeID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteAmenityTypeUnsuccessfulDialog = this.dialog.open(DeleteAmenityTypeUnsuccessfulComponent);
      }
      else{
        const deleteAmenityTypeSuccessfulDialog = this.dialog.open(DeleteAmenityTypeSuccessfulComponent);
      }
    });

  }
}
