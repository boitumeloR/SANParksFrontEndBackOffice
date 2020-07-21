import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddDailyConservationFeeSuccessfulComponent} from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-successful/add-daily-conservation-fee-successful.component';
import {AddDailyConservationFeeUnsuccessfulComponent} from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-unsuccessful/add-daily-conservation-fee-unsuccessful.component';

@Component({
  selector: 'app-add-daily-conservation-fee-confirmation',
  templateUrl: './add-daily-conservation-fee-confirmation.component.html',
  styleUrls: ['./add-daily-conservation-fee-confirmation.component.scss']
})
export class AddDailyConservationFeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddDailyConservationFee(){
    const addDailyConservationFeeSuccessfulDialog = this.dialog.open(AddDailyConservationFeeSuccessfulComponent);
  }

  unsuccessfulAddDailyConservationFee(){
    const addDailyConservationFeeUnsuccessfulDialog = this.dialog.open(AddDailyConservationFeeUnsuccessfulComponent);
  }
}
