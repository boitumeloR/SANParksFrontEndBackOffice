import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivitySlotConfirmationComponent} from 'src/app/modals/activity-slot/update-activity-slot-confirmation/update-activity-slot-confirmation.component';
@Component({
  selector: 'app-update-activity-slot',
  templateUrl: './update-activity-slot.component.html',
  styleUrls: ['./update-activity-slot.component.scss']
})
export class UpdateActivitySlotComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateActivitySlot(){
    const updateActivitySlotConfirmationDialog = this.dialog.open(UpdateActivitySlotConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
