import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-accomodation-base-rate-confirmation',
  templateUrl: './update-accomodation-base-rate-confirmation.component.html',
  styleUrls: ['./update-accomodation-base-rate-confirmation.component.scss']
})
export class UpdateAccomodationBaseRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
