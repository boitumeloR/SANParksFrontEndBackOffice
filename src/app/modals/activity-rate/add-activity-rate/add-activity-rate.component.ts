import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddActivityRateConfirmationComponent} from 'src/app/modals/activity-rate/add-activity-rate-confirmation/add-activity-rate-confirmation.component';
@Component({
  selector: 'app-add-activity-rate',
  templateUrl: './add-activity-rate.component.html',
  styleUrls: ['./add-activity-rate.component.scss']
})
export class AddActivityRateComponent implements OnInit {

  selectActivityForm: FormGroup;
  activityRateDetails: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addActivityRate(){
    const addActivityRateConfirmationDialog = this.dialog.open(AddActivityRateConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
