import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteActivitySlotSuccessfulComponent} from 'src/app/modals/activity-slot/delete-activity-slot-successful/delete-activity-slot-successful.component';

@Component({
  selector: 'app-delete-activity-slot',
  templateUrl: './delete-activity-slot.component.html',
  styleUrls: ['./delete-activity-slot.component.scss']
})
export class DeleteActivitySlotComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteActivitySlot(){
    const deleteActivitySlotSuccessfulDialog = this.dialog.open(DeleteActivitySlotSuccessfulComponent);
  }
}
