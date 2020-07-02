import { Component, OnInit } from '@angular/core';
import {UpdateActivityComponent} from 'src/app/modals/activity/update-activity/update-activity.component';
import {DeleteActivityComponent} from 'src/app/modals/activity/delete-activity/delete-activity.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.component.html',
  styleUrls: ['./view-activity.component.scss']
})
export class ViewActivityComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateActivity(){
    const updateActivityDialog = this.dialog.open(UpdateActivityComponent,{disableClose: true})
  }
  deleteActivity(){
    const deleteActivityTypeDialog = this.dialog.open(DeleteActivityComponent);
  }
}
