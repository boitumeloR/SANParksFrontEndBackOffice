import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-accomodation-confirmation',
  templateUrl: './update-accomodation-confirmation.component.html',
  styleUrls: ['./update-accomodation-confirmation.component.scss']
})
export class UpdateAccomodationConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
