import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAccomodationBaseRateSuccessfulComponent} from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate-successful/add-accomodation-base-rate-successful.component';
import {AddAccomodationBaseRateUnsuccessfulComponent} from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate-unsuccessful/add-accomodation-base-rate-unsuccessful.component';

@Component({
  selector: 'app-add-accomodation-base-rate-confirmation',
  templateUrl: './add-accomodation-base-rate-confirmation.component.html',
  styleUrls: ['./add-accomodation-base-rate-confirmation.component.scss']
})
export class AddAccomodationBaseRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddAccomodationBaseRate(){
    const addAccomodationBaseRateSuccessfulDialog = this.dialog.open(AddAccomodationBaseRateSuccessfulComponent);
  }

  unsuccessfulAddAccomodationBaseRate(){
    const addAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(AddAccomodationBaseRateUnsuccessfulComponent);
  }
}
