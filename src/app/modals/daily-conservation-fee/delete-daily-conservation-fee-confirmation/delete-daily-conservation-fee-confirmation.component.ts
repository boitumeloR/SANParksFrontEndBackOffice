import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteDailyConservationFeeSuccessfulComponent } from 'src/app/modals/daily-conservation-fee/delete-daily-conservation-fee-successful/delete-daily-conservation-fee-successful.component';

@Component({
  selector: 'app-delete-daily-conservation-fee-confirmation',
  templateUrl: './delete-daily-conservation-fee-confirmation.component.html',
  styleUrls: ['./delete-daily-conservation-fee-confirmation.component.scss']
})
export class DeleteDailyConservationFeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteDailyConservationFee(){
    const deleteDailyConservationFeeSuccessfulDialog = this.dialog.open(DeleteDailyConservationFeeSuccessfulComponent);
  }
}
