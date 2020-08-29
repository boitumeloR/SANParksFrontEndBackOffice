import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/add-activity-rate-successful/add-activity-rate-successful.component';
import {AddActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/add-activity-rate-unsuccessful/add-activity-rate-unsuccessful.component';
import { UpdateActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/update-activity-rate-successful/update-activity-rate-successful.component';
import { UpdateActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/update-activity-rate-unsuccessful/update-activity-rate-unsuccessful.component';
import { DeleteActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/delete-activity-rate-successful/delete-activity-rate-successful.component';
import { DeleteActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/delete-activity-rate-unsuccessful/delete-activity-rate-unsuccessful.component';
import {MatDialog} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
export interface ActivityRate{
  ActivityRateID: number;
  ActivityID: number;
  CampID: number;
  RateTypeID: number;
  AdultRateAmount: number;
  ChildRateAmount: number;
  VehicleAmount: number;
  HutAmount: number;
  PersonAmount: number;
  BikeAmount: number;
  NoBikeAmount: number;
  startDate: Date;
  endDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityRateService {

  constructor(private dialog: MatDialog , private http: HttpClient) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createActivityRate(ActivityRate, link){
    return this.http.post(`${link}/api/activityRate/createActivityRate`, ActivityRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addActivityRateUnsuccessfulDialog = this.dialog.open(AddActivityRateUnsuccessfulComponent);
      }
      else{
        const addActivityRateSuccessfulDialog = this.dialog.open(AddActivityRateSuccessfulComponent);
      }
    });
  }
  readActivityRate(link){
    return this.http.get(`${link}/api/activityRate/getActivityRate`);
  }
  updateActivityRate(updatedActivityRate, link){
    return this.http.post(`${link}/api/activityRate/updateActivityRate`, updatedActivityRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateActivityRateUnsuccessfulDialog = this.dialog.open(UpdateActivityRateUnsuccessfulComponent);
      }
      else{
        const updateActivityRateSuccessfulDialog = this.dialog.open(UpdateActivityRateSuccessfulComponent);
      }
    });
  }
  deleteActivityRate(ActivityRateID, link){
    return this.http.delete(`${link}/api/activityRate/deleteActivityRate?activityRateID=${ActivityRateID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteActivityRateUnsuccessfulDialog = this.dialog.open(DeleteActivityRateUnsuccessfulComponent);
      }
      else{
        const deleteActivityRateSuccessfulDialog = this.dialog.open(DeleteActivityRateSuccessfulComponent);
      }
    });
  }
  readRateTypes(link){
    return this.http.get(`${link}/api/activityRate/getRateTypes`);
  }
}
