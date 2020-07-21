import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-confirmation/update-daily-conservation-fee-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-daily-conservation-fee',
  templateUrl: './update-daily-conservation-fee.component.html',
  styleUrls: ['./update-daily-conservation-fee.component.scss']
})
export class UpdateDailyConservationFeeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateDailyConservationFee(){
    const updateDailyConservationFeeConfirmationDialog =  this.dialog.open(UpdateDailyConservationFeeConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
