import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddActivityTypeSuccessfulComponent} from 'src/app/modals/activity-type/add-activity-type-successful/add-activity-type-successful.component';
import {AddActivityTypeUnsuccessfulComponent} from 'src/app/modals/activity-type/add-activity-type-unsuccessful/add-activity-type-unsuccessful.component';
import {DeleteActivityTypeSuccessfulComponent} from 'src/app/modals/activity-type/delete-activity-type-successful/delete-activity-type-successful.component';
import {DeleteActivityTypeUnsuccessfulComponent} from 'src/app/modals/activity-type/delete-activity-type-unsuccessful/delete-activity-type-unsuccessful.component';
import {UpdateActivityTypeSuccessfulComponent} from 'src/app/modals/activity-type/update-activity-type-successful/update-activity-type-successful.component';
import {UpdateActivityTypeUnsuccessfulComponent} from 'src/app/modals/activity-type/update-activity-type-unsuccessful/update-activity-type-unsuccessful.component';

export interface ActivityType{
  ActivityTypeID: number;
  ActivityTypeDescription: string;
}

export interface ActivityTypeDropDown{
  ActivityTypeID: number;
  ActivityTypeDescription: string;
}


@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {
  constructor(private globalService: GlobalService , private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createActivityType(ActivityType, link){
    return this.http.post(`${link}/api/activityType/createActivityType`, ActivityType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
       const addActivityTypeUnsuccessfulDialog = this.dialog.open(AddActivityTypeUnsuccessfulComponent);
      }
      else{
       const addActivityTypeSuccessfulDialog = this.dialog.open(AddActivityTypeSuccessfulComponent);
      }
    });
  }
  readActivityType(link){
    return this.http.get(`${link}/api/activityType/getActivityType`);
  }
  updateActivityType(updatedActivityType, link){
    return this.http.post(`${link}/api/activityType/updateActivityType`, updatedActivityType).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
       const updateActivityTypeUnsuccessfulDialog = this.dialog.open(UpdateActivityTypeUnsuccessfulComponent);
      }
      else{
       const updateActivityTypeSuccessfulDialog = this.dialog.open(UpdateActivityTypeSuccessfulComponent);
      }
    });
  }
  deleteActivityType(ActivityTypeID, link){
    return this.http.delete(`${link}/api/activityType/deleteActivityType?activityTypeID=${ActivityTypeID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteActivityTypeUnsuccessfulDialog = this.dialog.open(DeleteActivityTypeUnsuccessfulComponent);
      }
      else{
        const deleteActivityTypeSuccessfulDialog = this.dialog.open(DeleteActivityTypeSuccessfulComponent);
      }
    });
  }

}
