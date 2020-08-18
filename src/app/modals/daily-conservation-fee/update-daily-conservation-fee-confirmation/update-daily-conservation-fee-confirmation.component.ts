import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-daily-conservation-fee-confirmation',
  templateUrl: './update-daily-conservation-fee-confirmation.component.html',
  styleUrls: ['./update-daily-conservation-fee-confirmation.component.scss']
})
export class UpdateDailyConservationFeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
