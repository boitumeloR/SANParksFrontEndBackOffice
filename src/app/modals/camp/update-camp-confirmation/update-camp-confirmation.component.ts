import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateCampSuccessfulComponent} from 'src/app/modals/camp/update-camp-successful/update-camp-successful.component';
import {UpdateCampUnsuccessfulComponent} from 'src/app/modals/camp/update-camp-unsuccessful/update-camp-unsuccessful.component';
@Component({
  selector: 'app-update-camp-confirmation',
  templateUrl: './update-camp-confirmation.component.html',
  styleUrls: ['./update-camp-confirmation.component.scss']
})
export class UpdateCampConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateCamp(){
    const updateCampSuccessfulDialog = this.dialog.open(UpdateCampSuccessfulComponent);
  }

  unsuccessfulUpdateCamp(){
    const updateCampUnsuccessfulDialog = this.dialog.open(UpdateCampUnsuccessfulComponent);
  }
}
