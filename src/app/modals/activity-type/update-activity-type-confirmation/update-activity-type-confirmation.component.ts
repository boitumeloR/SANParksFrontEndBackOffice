import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateActivityTypeSuccessfulComponent} from 'src/app/modals/activity-type/update-activity-type-successful/update-activity-type-successful.component';
import {UpdateActivityTypeUnsuccessfulComponent} from 'src/app/modals/activity-type/update-activity-type-unsuccessful/update-activity-type-unsuccessful.component';

@Component({
  selector: 'app-update-activity-type-confirmation',
  templateUrl: './update-activity-type-confirmation.component.html',
  styleUrls: ['./update-activity-type-confirmation.component.scss']
})
export class UpdateActivityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateActivityType(){
    const updateActivityTypeSuccessfulDialog = this.dialog.open(UpdateActivityTypeSuccessfulComponent);
  }

  unsuccessfulUpdateActivityType(){
    const updateActivityTypeUnsuccessfulDialog = this.dialog.open(UpdateActivityTypeUnsuccessfulComponent);
  }
}
