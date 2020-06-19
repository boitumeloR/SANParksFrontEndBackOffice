import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateDailyConservationFeeComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee/update-daily-conservation-fee.component';
import {DeleteDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/delete-daily-conservation-fee-confirmation/delete-daily-conservation-fee-confirmation.component';

@Component({
  selector: 'app-view-daily-conservation-fee',
  templateUrl: './view-daily-conservation-fee.component.html',
  styleUrls: ['./view-daily-conservation-fee.component.scss']
})
export class ViewDailyConservationFeeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateDailyConservationFee(){
    const updateDailyConservationFeeDialog = this.dialog.open(UpdateDailyConservationFeeComponent);
  }

  deleteDailyConservationFee(){
    const deleteDailyConservationFeeDialog = this.dialog.open(DeleteDailyConservationFeeConfirmationComponent);
  }
}
