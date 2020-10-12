import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-daily-conservation-fee-confirmation',
  templateUrl: './add-daily-conservation-fee-confirmation.component.html',
  styleUrls: ['./add-daily-conservation-fee-confirmation.component.scss']
})
export class AddDailyConservationFeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
