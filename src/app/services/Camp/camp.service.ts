import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddCampSuccessfulComponent} from 'src/app/modals/camp/add-camp-successful/add-camp-successful.component';
import {AddCampUnsuccessfulComponent} from 'src/app/modals/camp/add-camp-unsuccessful/add-camp-unsuccessful.component';
import {UpdateCampSuccessfulComponent} from 'src/app/modals/camp/update-camp-successful/update-camp-successful.component';
import {UpdateCampUnsuccessfulComponent} from 'src/app/modals/camp/update-camp-unsuccessful/update-camp-unsuccessful.component';
import { DeleteCampSuccessfulComponent } from 'src/app/modals/camp/delete-camp-successful/delete-camp-successful.component';
import { DeleteCampUnsuccessfulComponent } from 'src/app/modals/camp/delete-camp-unsuccessful/delete-camp-unsuccessful.component';

export interface Camp{
  CampID: number;
  ParkID: number;
  CampTypeID: number;
  CampDescription: string;
  CampLatitude: string;
  CampLongitude: string;
  CampName: string;
}

export interface CampDropDown{
  CampID: number;
  CampName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampService {

  constructor(private global: GlobalService , private http: HttpClient, private dialog: MatDialog ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createCamp(Camp, link){
    return this.http.post(`${link}/api/Camp/createCamp`, Camp).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addCampUnsuccessfulDialog = this.dialog.open(AddCampUnsuccessfulComponent);
      }
      else{
        const addCampSuccessfulDialog = this.dialog.open(AddCampSuccessfulComponent);
      }
    });
  }
  readCamp(link){
    return this.http.get(`${link}/api/Camp/getCamp`);
  }
  updateCamp(updatedCamp, link){
    return this.http.post(`${link}/api/Camp/updateCamp`, updatedCamp).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateCampUnsuccessfulDialog = this.dialog.open(UpdateCampUnsuccessfulComponent);
      }
      else{
        const updateCampSuccessfulDialog = this.dialog.open(UpdateCampSuccessfulComponent);
      }
    });
  }
  deleteCamp(CampID, link){
    return this.http.delete(`${link}/api/Camp/deleteCamp?campID=${CampID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteCampUnsuccessfulDialog = this.dialog.open(DeleteCampUnsuccessfulComponent);
      }
      else{
        const deleteCampSuccessfulDialog = this.dialog.open(DeleteCampSuccessfulComponent);
      }
    });
  }
  getCampsForSpecificPark(parkID, link){
    return this.http.get(`${link}/api/Camp/getCampsForPark?parkID=${parkID}`);
  }
}
