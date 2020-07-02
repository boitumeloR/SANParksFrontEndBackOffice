import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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
}
