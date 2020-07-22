import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/add-accomodation-successful/add-accomodation-successful.component';
import {AddAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/add-accomodation-unsuccessful/add-accomodation-unsuccessful.component';
@Component({
  selector: 'app-add-accomodation-confirmation',
  templateUrl: './add-accomodation-confirmation.component.html',
  styleUrls: ['./add-accomodation-confirmation.component.scss']
})
export class AddAccomodationConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddAccomodation(){
    const addAccomodationSuccessfulDialog = this.dialog.open(AddAccomodationSuccessfulComponent);
  }

  unsuccessfulAddAccomodation(){
    const addAccomodationUnsuccessfulDialog = this.dialog.open(AddAccomodationUnsuccessfulComponent);
  }
}
