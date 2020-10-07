import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
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
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivityAddedComponent} from 'src/app/workflows/activity-added/activity-added.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
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
              private router: Router, private bottomSheet: MatBottomSheet) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createActivity(Activity, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
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

        addActivitySuccessfulDialog.afterClosed().subscribe(() => {
          const parkFlowSheet =  this.bottomSheet.open(ActivityAddedComponent);
         });
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
  readActivity(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/activity/getActivity`, user);
  }
  updateActivity(updatedActivity, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
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
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
  deleteActivity(user, ActivityID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
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
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }

  getActivtyInSpecificCamp(campID, typeID, link){
    return this.http.get(`${link}/api/activity/getActivityForCamp?campID=${campID}&activityTypeID=${typeID}`);
  }
}
