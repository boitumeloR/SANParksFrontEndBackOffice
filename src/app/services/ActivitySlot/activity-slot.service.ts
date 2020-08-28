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
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateActivitySlot(ActivitySlot, link){
    return this.http.post(`${link}/api/activitySlot/createActivitySlot`, ActivitySlot).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addActivitySlotUnsuccessfulDialog = this.dialog.open(AddActivitySlotUnsuccessfulComponent);
      }
      else{
        const addActivitySlotSuccessfulDialog = this.dialog.open(AddActivitySlotSuccessfulComponent);
      }
    });
  }

  ReadActivitySlot(link){
    return this.http.get(`${link}/api/activitySlot/getActivitySlot`);
  }

  UpdateActivitySlot(ActivitySlot, link){
    return this.http.post(`${link}/api/activitySlot/updateActivitySlot`, ActivitySlot).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateActivitySlotUnsuccessfulDialog = this.dialog.open(UpdateActivitySlotUnsuccessfulComponent);
      }
      else{
        const updateActivitySlotSuccessfulDialog = this.dialog.open(UpdateActivitySlotSuccessfulComponent);
      }
    });
  }

  DeleteActivitySlot(ActivitySlotID, link){
    return this.http.delete(`${link}/api/activitySlot/deleteActivitySlot?activitySlotID=${ActivitySlotID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteActivitySlotUnsuccessfulDialog = this.dialog.open(DeleteActivitySlotUnsuccessfulComponent);
      }
      else{
        const deleteActivitySlotSuccessfulDialog = this.dialog.open(DeleteActivitySlotSuccessfulComponent);
      }
    });
  }
}
