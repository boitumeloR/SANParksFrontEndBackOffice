import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddActivityTypeSuccessfulComponent} from 'src/app/modals/activity-type/add-activity-type-successful/add-activity-type-successful.component';
import {AddActivityTypeUnsuccessfulComponent} from 'src/app/modals/activity-type/add-activity-type-unsuccessful/add-activity-type-unsuccessful.component';
@Component({
  selector: 'app-add-activity-type-confirmation',
  templateUrl: './add-activity-type-confirmation.component.html',
  styleUrls: ['./add-activity-type-confirmation.component.scss']
})
export class AddActivityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddActivityType(){
    const addActivityTypeSuccessfulDialog = this.dialog.open(AddActivityTypeSuccessfulComponent);
  }

  unsuccessfulAddActivityType(){
    const addActivityTypeUnsuccessfulDialog = this.dialog.open(AddActivityTypeUnsuccessfulComponent);
  }
}
