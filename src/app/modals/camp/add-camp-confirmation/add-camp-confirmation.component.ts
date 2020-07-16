import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCampSuccessfulComponent} from 'src/app/modals/camp/add-camp-successful/add-camp-successful.component';
import {AddCampUnsuccessfulComponent} from 'src/app/modals/camp/add-camp-unsuccessful/add-camp-unsuccessful.component';

@Component({
  selector: 'app-add-camp-confirmation',
  templateUrl: './add-camp-confirmation.component.html',
  styleUrls: ['./add-camp-confirmation.component.scss']
})
export class AddCampConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddCamp(){
    const addCampSuccessfulDialog = this.dialog.open(AddCampSuccessfulComponent);
  }

  unsuccessfulAddCamp(){
    const addCampUnsuccessfulDialog = this.dialog.open(AddCampUnsuccessfulComponent);
  }
}
