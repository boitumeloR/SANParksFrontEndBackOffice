import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddActivitySlotSuccessfulComponent} from 'src/app/modals/activity-slot/add-activity-slot-successful/add-activity-slot-successful.component';
import {AddActivitySlotUnsuccessfulComponent} from 'src/app/modals/activity-slot/add-activity-slot-unsuccessful/add-activity-slot-unsuccessful.component';
import { UpdateActivitySlotSuccessfulComponent} from 'src/app/modals/activity-slot/update-activity-slot-successful/update-activity-slot-successful.component';
import { UpdateActivitySlotUnsuccessfulComponent} from 'src/app/modals/activity-slot/update-activity-slot-unsuccessful/update-activity-slot-unsuccessful.component';
import { DeleteActivitySlotSuccessfulComponent} from 'src/app/modals/activity-slot/delete-activity-slot-successful/delete-activity-slot-successful.component';
import { DeleteActivitySlotUnsuccessfulComponent} from 'src/app/modals/activity-slot/delete-activity-slot-unsuccessful/delete-activity-slot-unsuccessful.component';
import { Router } from '@angular/router';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface ActivitySlot {
  ActivitySlotID: number;
  ActivityID: number;
  CampID: number;
  SlotTime: TimeRanges;
  StartDate: Date;
  EndDate: Date;
}
// Used in ActivityDate
export interface ActivitySlotDropDown {
  ActivitySlotID: number;
}

@Injectable({
  providedIn: 'root'
})

export class ActivitySlotService {
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateActivitySlot(ActivitySlot, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/activitySlot/createActivitySlot`, ActivitySlot).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addActivitySlotUnsuccessfulDialog = this.dialog.open(AddActivitySlotUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addActivitySlotSuccessfulDialog = this.dialog.open(AddActivitySlotSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    });
  }

  ReadActivitySlot(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/activitySlot/getActivitySlot`, user);
  }

  UpdateActivitySlot(ActivitySlot, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/activitySlot/updateActivitySlot`, ActivitySlot).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateActivitySlotUnsuccessfulDialog = this.dialog.open(UpdateActivitySlotUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateActivitySlotSuccessfulDialog = this.dialog.open(UpdateActivitySlotSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    });
  }

  DeleteActivitySlot(user, ActivitySlotID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/activitySlot/deleteActivitySlot?activitySlotID=${ActivitySlotID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivitySlotUnsuccessfulDialog = this.dialog.open(DeleteActivitySlotUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivitySlotSuccessfulDialog = this.dialog.open(DeleteActivitySlotSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    });
  }
}
