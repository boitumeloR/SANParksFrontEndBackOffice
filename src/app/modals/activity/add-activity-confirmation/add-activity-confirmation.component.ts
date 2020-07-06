import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddActivitySuccessfulComponent} from 'src/app/modals/activity/add-activity-successful/add-activity-successful.component';

@Component({
  selector: 'app-add-activity-confirmation',
  templateUrl: './add-activity-confirmation.component.html',
  styleUrls: ['./add-activity-confirmation.component.scss']
})
export class AddActivityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddActivity(){
    const addActivitySuccessfulDialog = this.dialog.open(AddActivitySuccessfulComponent);
  }
}
