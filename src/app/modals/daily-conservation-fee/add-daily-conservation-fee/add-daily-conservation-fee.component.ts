import { Component, OnInit } from '@angular/core';
import {AddDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-confirmation/add-daily-conservation-fee-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-daily-conservation-fee',
  templateUrl: './add-daily-conservation-fee.component.html',
  styleUrls: ['./add-daily-conservation-fee.component.scss']
})
export class AddDailyConservationFeeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  addDailyConservationFee(){
    const addDailyConservationFeeConfirmation = this.dialog.open(AddDailyConservationFeeConfirmationComponent);
  }
}
