import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCampTypeSuccessfulComponent} from 'src/app/modals/camp-type/add-camp-type-successful/add-camp-type-successful.component';
import {AddCampTypeUnsuccessfulComponent} from 'src/app/modals/camp-type/add-camp-type-unsuccessful/add-camp-type-unsuccessful.component';

@Component({
  selector: 'app-add-camp-type-confirmation',
  templateUrl: './add-camp-type-confirmation.component.html',
  styleUrls: ['./add-camp-type-confirmation.component.scss']
})
export class AddCampTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddCampType(){
    const addCampTypeSuccessfulDialog = this.dialog.open(AddCampTypeSuccessfulComponent);
  }

  unsuccessfulAddCampType(){
    const addCampTypeUnsuccessfulDialog = this.dialog.open(AddCampTypeUnsuccessfulComponent);
  }
}
