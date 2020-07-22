import { Component, OnInit } from '@angular/core';
import { UpdateActivityRateComponent} from 'src/app/modals/activity-rate/update-activity-rate/update-activity-rate.component';
import { DeleteActivityRateComponent} from 'src/app/modals/activity-rate/delete-activity-rate/delete-activity-rate.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-view-activity-rate',
  templateUrl: './view-activity-rate.component.html',
  styleUrls: ['./view-activity-rate.component.scss']
})
export class ViewActivityRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateActivityRate(){
    const updateActivityRateDialog = this.dialog.open(UpdateActivityRateComponent,{disableClose: true})
  }
  deleteActivityRate(){
    const deleteActivityRateDialog = this.dialog.open(DeleteActivityRateComponent)
  }
}
