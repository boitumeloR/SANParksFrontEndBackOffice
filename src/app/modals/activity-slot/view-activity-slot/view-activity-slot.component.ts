import { Component, OnInit } from '@angular/core';
import { UpdateActivitySlotComponent} from 'src/app/modals/activity-slot/update-activity-slot/update-activity-slot.component';
import { DeleteActivitySlotComponent} from 'src/app/modals/activity-slot/delete-activity-slot/delete-activity-slot.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-view-activity-slot',
  templateUrl: './view-activity-slot.component.html',
  styleUrls: ['./view-activity-slot.component.scss']
})
export class ViewActivitySlotComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateActivitySlot(){
    const updateActivitySlotDialog = this.dialog.open(UpdateActivitySlotComponent,{disableClose: true})
  }

  deleteActivitySlot(){
    const deleteActivitySlotDialog = this.dialog.open(DeleteActivitySlotComponent)
  }
}
