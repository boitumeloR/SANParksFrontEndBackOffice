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
import { Router } from '@angular/router';

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

  constructor(private dialog: MatDialog, private http: HttpClient,
              private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createActivity(Activity, link){
    return this.http.post(`${link}/api/activity/createActivity`, Activity).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addActivityUnsuccessfulDialog = this.dialog.open(AddActivityUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addActivitySuccessfulDialog = this.dialog.open(AddActivitySuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  readActivity(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/activity/getActivity`, user);
  }
  updateActivity(updatedActivity, link){
    return this.http.post(`${link}/api/activity/updateActivity`, updatedActivity).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateActivityUnsuccessfulDialog = this.dialog.open(UpdateActivityUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateActivitySuccessfulDialog = this.dialog.open(UpdateActivitySuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  deleteActivity(user, ActivityID, link){
    return this.http.post(`${link}/api/activity/deleteActivity?activityID=${ActivityID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivityUnsuccessfulDialog = this.dialog.open(DeleteActivityUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivitySuccessfulDialog = this.dialog.open(DeleteActivitySuccessfulComponent);
        this.refresh.next();
      }
    });
  }

  getActivtyInSpecificCamp(campID, typeID, link){
    return this.http.get(`${link}/api/activity/getActivityForCamp?campID=${campID}&activityTypeID=${typeID}`);
  }
}
