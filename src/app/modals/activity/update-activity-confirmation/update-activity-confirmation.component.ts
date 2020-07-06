import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateActivitySuccessfulComponent } from 'src/app/modals/activity/update-activity-successful/update-activity-successful.component';

@Component({
  selector: 'app-update-activity-confirmation',
  templateUrl: './update-activity-confirmation.component.html',
  styleUrls: ['./update-activity-confirmation.component.scss']
})
export class UpdateActivityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateActivity(){
    const updateActivitySuccessfulDialog = this.dialog.open(UpdateActivitySuccessfulComponent);
  }
}
