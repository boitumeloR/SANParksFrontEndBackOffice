import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/update-accomodation-successful/update-accomodation-successful.component';
import {UpdateAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/update-accomodation-unsuccessful/update-accomodation-unsuccessful.component';

@Component({
  selector: 'app-update-accomodation-confirmation',
  templateUrl: './update-accomodation-confirmation.component.html',
  styleUrls: ['./update-accomodation-confirmation.component.scss']
})
export class UpdateAccomodationConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateAccomodation(){
    const updateAccomodationSuccessfulDialog = this.dialog.open(UpdateAccomodationSuccessfulComponent);
  }

  unsuccessfulUpdateAccomodation(){
    const updateAccomodationUnsuccessfulDialog = this.dialog.open(UpdateAccomodationUnsuccessfulComponent);
  }
}
                                                                              