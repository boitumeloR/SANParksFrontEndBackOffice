import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateDailyConservationFeeSuccessfulComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-successful/update-daily-conservation-fee-successful.component';
import {UpdateDailyConservationFeeUnsuccessfulComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-unsuccessful/update-daily-conservation-fee-unsuccessful.component';

@Component({
  selector: 'app-update-daily-conservation-fee-confirmation',
  templateUrl: './update-daily-conservation-fee-confirmation.component.html',
  styleUrls: ['./update-daily-conservation-fee-confirmation.component.scss']
})
export class UpdateDailyConservationFeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateDailyConservationFee(){
    const updateDailyConservationFeeSuccessfulDialog = this.dialog.open(UpdateDailyConservationFeeSuccessfulComponent);
  }

  unsuccessfulUpdateDailyConservationFee(){
    const updateDailyConservationFeeUnsuccessfulDialog = this.dialog.open(UpdateDailyConservationFeeUnsuccessfulComponent);
  }
}
