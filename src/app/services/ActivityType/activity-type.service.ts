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
import { SecurityContext } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

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
  constructor(private globalService: GlobalService , private http: HttpClient, private dialog: MatDialog,
              private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createActivityType(ActivityType, link){
    return this.http.post(`${link}/api/activityType/createActivityType`, ActivityType).subscribe((addResult: any) => {
      if (addResult.Error){
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addActivityTypeUnsuccessfulDialog = this.dialog.open(AddActivityTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addActivityTypeSuccessfulDialog = this.dialog.open(AddActivityTypeSuccessfulComponent);
       this.refresh.next();
      }
    });
  }
  readActivityType(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/activityType/getActivityType`, user);
  }
  updateActivityType(updatedActivityType, link){
    return this.http.post(`${link}/api/activityType/updateActivityType`, updatedActivityType).subscribe((updateResult: any) => {
      if (updateResult.Error){
       localStorage.setItem('user', JSON.stringify(updateResult.user));
       const updateActivityTypeUnsuccessfulDialog = this.dialog.open(UpdateActivityTypeUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(updateResult.user));
       const updateActivityTypeSuccessfulDialog = this.dialog.open(UpdateActivityTypeSuccessfulComponent);
       this.refresh.next();
      }
    });
  }
  deleteActivityType(user, ActivityTypeID, link){
    return this.http.post(`${link}/api/activityType/deleteActivityType?activityTypeID=${ActivityTypeID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivityTypeUnsuccessfulDialog = this.dialog.open(DeleteActivityTypeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivityTypeSuccessfulDialog = this.dialog.open(DeleteActivityTypeSuccessfulComponent);
        this.refresh.next();
      }
    });
  }

}
