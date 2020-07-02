import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { MatDialog} from '@angular/material/dialog'
import {UpdateActivityConfirmationComponent} from 'src/app/modals/activity/update-activity-confirmation/update-activity-confirmation.component'
@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.scss']
})
export class UpdateActivityComponent implements OnInit {

  basicActivityDetails: FormGroup;
  campsAvailableAt: FormGroup;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateActivity(){
    const updateActivityConfirmationDialog = this.dialog.open(UpdateActivityConfirmationComponent);
  }
}
