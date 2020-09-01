import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddActivitySuccessfulComponent} from 'src/app/modals/activity/add-activity-successful/add-activity-successful.component';
import {AddActivityUnsuccessfulComponent} from 'src/app/modals/activity/add-activity-unsuccessful/add-activity-unsuccessful.component';
import {UpdateActivitySuccessfulComponent } from 'src/app/modals/activity/update-activity-successful/update-activity-successful.component';
import { UpdateActivityUnsuccessfulComponent} from 'src/app/modals/activity/update-activity-unsuccessful/update-activity-unsuccessful.component';
import { DeleteActivitySuccessfulComponent} from 'src/app/modals/activity/delete-activity-successful/delete-activity-successful.component';
import { DeleteActivityUnsuccessfulComponent} from 'src/app/modals/activity/delete-activity-unsuccessful/delete-activity-unsuccessful.component';

export interface Activity{
  ActivityID: number;
  ActivityTypeID: number;
  ActivityDescription: string;
  ActivityMaxCapacity: number;
  AgeMin: number;
  AgeMax: number;
}

export interface ActivityDropDown{
  ActivityID: number;
  ActivityDescription: number;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createActivity(Activity, link){
    return this.http.post(`${link}/api/activity/createActivity`, Activity).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addActivityUnsuccessfulDialog = this.dialog.open(AddActivityUnsuccessfulComponent);
      }
      else{
        const addActivitySuccessfulDialog = this.dialog.open(AddActivitySuccessfulComponent);
      }
    });
  }
  readActivity(link){
    return this.http.get(`${link}/api/activity/getActivity`);
  }
  updateActivity(updatedActivity, link){
    return this.http.post(`${link}/api/activity/updateActivity`, updatedActivity).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateActivityUnsuccessfulDialog = this.dialog.open(UpdateActivityUnsuccessfulComponent);
      }
      else{
        const updateActivitySuccessfulDialog = this.dialog.open(UpdateActivitySuccessfulComponent);
      }
    });
  }
  deleteActivity(ActivityID, link){
    return this.http.delete(`${link}/api/activity/deleteActivity?activityID=${ActivityID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteActivityUnsuccessfulDialog = this.dialog.open(DeleteActivityUnsuccessfulComponent);
      }
      else{
        const deleteActivitySuccessfulDialog = this.dialog.open(DeleteActivitySuccessfulComponent);
      }
    });
  }

  getActivtyInSpecificCamp(campID, typeID, link){
    return this.http.get(`${link}/api/activity/getActivityForCamp?campID=${campID}&activityTypeID=${typeID}`);
  }
}
