import { Component, OnInit } from '@angular/core';
import { UpdateActivityTypeComponent} from 'src/app/modals/activity-type/update-activity-type/update-activity-type.component';
import { DeleteActivityTypeComponent} from 'src/app/modals/activity-type/delete-activity-type/delete-activity-type.component';
import {MatDialog} from '@angular/material/dialog';
import { ActivityType, ActivityTypeService } from 'src/app/services/ActivityType/activity-type.service';
import {GlobalService} from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-activity-type',
  templateUrl: './view-activity-type.component.html',
  styleUrls: ['./view-activity-type.component.scss']
})
export class ViewActivityTypeComponent implements OnInit {
activityType: ActivityType;
  constructor(private dialog: MatDialog, private globalService: GlobalService, private activityTypeService: ActivityTypeService) { }

  ngOnInit(): void {
    this.activityType = JSON.parse(localStorage.getItem('activityType'));
  }
  updateActivityType(){
    const updateCampDialog = this.dialog.open(UpdateActivityTypeComponent, {disableClose: true});
  }

  deleteActivityType(){
    const deleteActivityTypeConfirmation =  this.dialog.open(DeleteActivityTypeComponent);
    deleteActivityTypeConfirmation.afterClosed().subscribe(result => {
      if (result === true){
        this.activityTypeService.deleteActivityType(this.activityType.ActivityTypeID, this.globalService.GetServer());
      }
    });
  }
}
