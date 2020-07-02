import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {UpdateActivityRateConfirmationComponent} from 'src/app/modals/activity-rate/update-activity-rate-confirmation/update-activity-rate-confirmation.component';
@Component({
  selector: 'app-update-activity-rate',
  templateUrl: './update-activity-rate.component.html',
  styleUrls: ['./update-activity-rate.component.scss']
})
export class UpdateActivityRateComponent implements OnInit {

  activityRateDetails: FormGroup;
  selectActivityForm: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateActivityRate(){
    const updateActivityRateConfirmationDialog = this.dialog.open(UpdateActivityRateConfirmationComponent);
  }
}
