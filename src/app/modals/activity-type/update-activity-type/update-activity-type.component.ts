import { Component, OnInit } from '@angular/core';
import {UpdateActivityTypeConfirmationComponent } from 'src/app/modals/activity-type/update-activity-type-confirmation/update-activity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-activity-type',
  templateUrl: './update-activity-type.component.html',
  styleUrls: ['./update-activity-type.component.scss']
})
export class UpdateActivityTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateActivityType(){
    const updateActivityTypeConfirmationDialog = this.dialog.open(UpdateActivityTypeConfirmationComponent)
  }
}