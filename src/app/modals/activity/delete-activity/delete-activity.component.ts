import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteActivitySuccessfulComponent} from 'src/app/modals/activity/delete-activity-successful/delete-activity-successful.component';

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.scss']
})
export class DeleteActivityComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteActivity(){
    const deleteActivitySuccessfulDialog = this.dialog.open(DeleteActivitySuccessfulComponent);
  }
}
