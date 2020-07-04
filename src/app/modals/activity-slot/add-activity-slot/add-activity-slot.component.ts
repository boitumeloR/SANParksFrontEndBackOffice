import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddActivitySlotConfirmationComponent} from 'src/app/modals/activity-slot/add-activity-slot-confirmation/add-activity-slot-confirmation.component'
@Component({
  selector: 'app-add-activity-slot',
  templateUrl: './add-activity-slot.component.html',
  styleUrls: ['./add-activity-slot.component.scss']
})
export class AddActivitySlotComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addSlotTime(){
    const addSlotTimeConfirmationDialog = this.dialog.open(AddActivitySlotConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
