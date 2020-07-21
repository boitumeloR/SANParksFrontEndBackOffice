import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/update-camp-type-successful/update-camp-type-successful.component';
import {UpdateCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/update-camp-type-unsuccessful/update-camp-type-unsuccessful.component';

@Component({
  selector: 'app-update-camp-type-confirmation',
  templateUrl: './update-camp-type-confirmation.component.html',
  styleUrls: ['./update-camp-type-confirmation.component.scss']
})
export class UpdateCampTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateCampType(){
    const updateCampTypeSuccessfulDialog = this.dialog.open(UpdateCampTypeSuccessfulComponent);
  }

  unsuccessfulUpdateCampType(){
    const updateCampTypeUnsuccessfulDialog = this.dialog.open(UpdateCampTypeUnsuccessfulComponent);
  }
}
