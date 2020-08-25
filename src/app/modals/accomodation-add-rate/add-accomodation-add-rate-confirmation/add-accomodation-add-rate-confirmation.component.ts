import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-accomodation-add-rate-confirmation',
  templateUrl: './add-accomodation-add-rate-confirmation.component.html',
  styleUrls: ['./add-accomodation-add-rate-confirmation.component.scss']
})
export class AddAccomodationAddRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
