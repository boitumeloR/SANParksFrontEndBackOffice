import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/delete-activity-rate-successful/delete-activity-rate-successful.component';

@Component({
  selector: 'app-delete-activity-rate',
  templateUrl: './delete-activity-rate.component.html',
  styleUrls: ['./delete-activity-rate.component.scss']
})
export class DeleteActivityRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteActivityRate(){
    const deleteActivityRateSuccessfulDialog = this.dialog.open(DeleteActivityRateSuccessfulComponent);
  }
}
