import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateActivitySlotSuccessfulComponent} from 'src/app/modals/activity-slot/update-activity-slot-successful/update-activity-slot-successful.component';

@Component({
  selector: 'app-update-activity-slot-confirmation',
  templateUrl: './update-activity-slot-confirmation.component.html',
  styleUrls: ['./update-activity-slot-confirmation.component.scss']
})
export class UpdateActivitySlotConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateActivitySlot(){
    const updateActivitySlotSuccessfulDialog = this.dialog.open(UpdateActivitySlotSuccessfulComponent);
  }
} 
