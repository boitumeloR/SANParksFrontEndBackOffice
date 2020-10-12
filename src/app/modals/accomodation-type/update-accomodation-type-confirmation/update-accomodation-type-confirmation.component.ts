import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-accomodation-type-confirmation',
  templateUrl: './update-accomodation-type-confirmation.component.html',
  styleUrls: ['./update-accomodation-type-confirmation.component.scss']
})
export class UpdateAccomodationTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
