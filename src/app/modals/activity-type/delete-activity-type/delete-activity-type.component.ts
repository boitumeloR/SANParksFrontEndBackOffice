import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteActivityTypeSuccessfulComponent} from 'src/app/modals/activity-type/delete-activity-type-successful/delete-activity-type-successful.component';

@Component({
  selector: 'app-delete-activity-type',
  templateUrl: './delete-activity-type.component.html',
  styleUrls: ['./delete-activity-type.component.scss']
})
export class DeleteActivityTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteActivityType(){
    const deleteActivityTypeSuccessfulDialog = this.dialog.open(DeleteActivityTypeSuccessfulComponent);
  }
}
