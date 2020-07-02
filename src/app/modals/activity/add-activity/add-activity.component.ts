import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog'
import {AddActivityConfirmationComponent} from 'src/app/modals/activity/add-activity-confirmation/add-activity-confirmation.component'

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  basicActivityDetails: FormGroup;
  campsAvailableAt: FormGroup
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addActivity(){
    const addActivityConfirmationDialog = this.dialog.open(AddActivityConfirmationComponent)
  }
}
