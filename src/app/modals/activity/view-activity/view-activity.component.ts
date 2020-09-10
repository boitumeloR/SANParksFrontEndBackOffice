import { Component, OnInit } from '@angular/core';
import {UpdateActivityComponent} from 'src/app/modals/activity/update-activity/update-activity.component';
import {DeleteActivityComponent} from 'src/app/modals/activity/delete-activity/delete-activity.component';
import {MatDialog} from '@angular/material/dialog';
import { ActivityService } from 'src/app/services/Activity/activity.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.scss']
})
export class ViewActivityComponent implements OnInit {
  campsAvailable = '';
  activity;
  listOfImages = [];

  constructor(private dialog: MatDialog, private activityService: ActivityService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.activity = JSON.parse(localStorage.getItem('activity'));

    this.activity.ListOfImages.forEach(element => {
      this.listOfImages.push('data:image/png;base64,' + element.ImageInBase64);
    });

    this.activity.CampsAvailableAt.forEach(element => {
        this.campsAvailable +=  element.CampName + '\n' ;
    });
  }

  updateActivity(){
    const updateActivityDialog = this.dialog.open(UpdateActivityComponent, {disableClose: true});
  }
  deleteActivity(){
    const deleteActivityTypeDialog = this.dialog.open(DeleteActivityComponent);

    deleteActivityTypeDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.activityService.deleteActivity(authenticateUser, this.activity.ActivityID, this.globalService.GetServer());
      }
    });
  }
}
