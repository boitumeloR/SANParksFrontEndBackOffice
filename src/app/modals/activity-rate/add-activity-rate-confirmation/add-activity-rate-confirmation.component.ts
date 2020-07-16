import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/add-activity-rate-successful/add-activity-rate-successful.component';
import {AddActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/add-activity-rate-unsuccessful/add-activity-rate-unsuccessful.component';
@Component({
  selector: 'app-add-activity-rate-confirmation',
  templateUrl: './add-activity-rate-confirmation.component.html',
  styleUrls: ['./add-activity-rate-confirmation.component.scss']
})
export class AddActivityRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddActivityRate(){
    const addActivityRateSuccessfulDialog = this.dialog.open(AddActivityRateSuccessfulComponent);
  }

  unsuccessfulAddActivityRate(){
    const addActivityRateUnsuccessfulDialog = this.dialog.open(AddActivityRateUnsuccessfulComponent);
  }
}
