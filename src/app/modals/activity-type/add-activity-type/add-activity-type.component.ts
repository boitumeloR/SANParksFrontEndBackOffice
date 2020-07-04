import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddActivityTypeConfirmationComponent} from 'src/app/modals/activity-type/add-activity-type-confirmation/add-activity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-activity-type',
  templateUrl: './add-activity-type.component.html',
  styleUrls: ['./add-activity-type.component.scss']
})
export class AddActivityTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addActivityType(){
    const addActivityTypeConfirmationDialog = this.dialog.open(AddActivityTypeConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
