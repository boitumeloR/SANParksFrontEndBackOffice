import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-accomodation-base-rate-confirmation',
  templateUrl: './add-accomodation-base-rate-confirmation.component.html',
  styleUrls: ['./add-accomodation-base-rate-confirmation.component.scss']
})
export class AddAccomodationBaseRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
