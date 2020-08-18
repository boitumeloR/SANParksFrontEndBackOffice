import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-daily-conservation-fee-confirmation',
  templateUrl: './delete-daily-conservation-fee-confirmation.component.html',
  styleUrls: ['./delete-daily-conservation-fee-confirmation.component.scss']
})
export class DeleteDailyConservationFeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
