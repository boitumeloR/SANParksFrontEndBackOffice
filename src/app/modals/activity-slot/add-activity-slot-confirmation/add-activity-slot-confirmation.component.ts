import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddActivitySlotSuccessfulComponent} from 'src/app/modals/activity-slot/add-activity-slot-successful/add-activity-slot-successful.component';
import {AddActivitySlotUnsuccessfulComponent} from 'src/app/modals/activity-slot/add-activity-slot-unsuccessful/add-activity-slot-unsuccessful.component';

@Component({
  selector: 'app-add-activity-slot-confirmation',
  templateUrl: './add-activity-slot-confirmation.component.html',
  styleUrls: ['./add-activity-slot-confirmation.component.scss']
})
export class AddActivitySlotConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddActivitySlot(){
    const addActivitySlotSuccessfulDialog = this.dialog.open(AddActivitySlotSuccessfulComponent);
  }

  unsuccessfulAddActivitySlot(){
    const addActivitySlotUnsuccessfulDialog = this.dialog.open(AddActivitySlotUnsuccessfulComponent);
  }
}
