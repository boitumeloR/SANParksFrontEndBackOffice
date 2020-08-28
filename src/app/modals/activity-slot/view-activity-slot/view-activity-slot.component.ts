import { Component, OnInit } from '@angular/core';
import { UpdateActivitySlotComponent} from 'src/app/modals/activity-slot/update-activity-slot/update-activity-slot.component';
import { DeleteActivitySlotComponent} from 'src/app/modals/activity-slot/delete-activity-slot/delete-activity-slot.component';
import {MatDialog} from '@angular/material/dialog'
import { ActivitySlotService } from 'src/app/services/ActivitySlot/activity-slot.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-activity-slot',
  templateUrl: './view-activity-slot.component.html',
  styleUrls: ['./view-activity-slot.component.scss']
})
export class ViewActivitySlotComponent implements OnInit {

  constructor(private dialog: MatDialog, private activitySlotService: ActivitySlotService, private globalService: GlobalService) { }
  actvivitySlot;
  ngOnInit(): void {
    this.actvivitySlot = JSON.parse(localStorage.getItem('activitySlot'));
  }

  updateActivitySlot(){
    const updateActivitySlotDialog = this.dialog.open(UpdateActivitySlotComponent,{disableClose: true})
  }

  deleteActivitySlot(){
    const deleteActivitySlotDialog = this.dialog.open(DeleteActivitySlotComponent);

    deleteActivitySlotDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.activitySlotService.DeleteActivitySlot(this.actvivitySlot.ActivitySlotID, this.globalService.GetServer());
      }
    });
  }
}
