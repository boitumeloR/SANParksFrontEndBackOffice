import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateAccomodationBaseRateSuccessfulComponent} from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate-successful/update-accomodation-base-rate-successful.component';
import {UpdateAccomodationBaseRateUnsuccessfulComponent} from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate-unsuccessful/update-accomodation-base-rate-unsuccessful.component';

@Component({
  selector: 'app-update-accomodation-base-rate-confirmation',
  templateUrl: './update-accomodation-base-rate-confirmation.component.html',
  styleUrls: ['./update-accomodation-base-rate-confirmation.component.scss']
})
export class UpdateAccomodationBaseRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateAccomodationBaseRate(){
    const updateAccomodationBaseRateSuccessfulDialog = this.dialog.open(UpdateAccomodationBaseRateSuccessfulComponent);
  }
  
  unsuccessfulUpdateAccomodationBaseRate(){
    const updateAccomodationBaseRateUnsuccessfulDialog = this.dialog.open(UpdateAccomodationBaseRateUnsuccessfulComponent);
  }
}
