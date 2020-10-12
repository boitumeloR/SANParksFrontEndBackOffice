import { Component, OnInit } from '@angular/core';
import { UpdateActivityRateComponent} from 'src/app/modals/activity-rate/update-activity-rate/update-activity-rate.component';
import { DeleteActivityRateComponent} from 'src/app/modals/activity-rate/delete-activity-rate/delete-activity-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityRate, ActivityRateService } from 'src/app/services/ActivityRate/activity-rate.service';

@Component({
  selector: 'app-view-activity-rate',
  templateUrl: './view-activity-rate.component.html',
  styleUrls: ['./view-activity-rate.component.scss']
})
export class ViewActivityRateComponent implements OnInit {
  activityRate;

  constructor(private dialog: MatDialog, private activityRateService: ActivityRateService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.activityRate = JSON.parse(localStorage.getItem('activityRate'));
  }

  updateActivityRate(){
    const updateActivityRateDialog = this.dialog.open(UpdateActivityRateComponent, {disableClose: true});
  }
  deleteActivityRate(){
    const deleteActivityRateDialog = this.dialog.open(DeleteActivityRateComponent);

    deleteActivityRateDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.activityRateService.deleteActivityRate(authenticateUser, this.activityRate.ActivityRateID, this.globalService.GetServer());
      }
    });
  }
}
