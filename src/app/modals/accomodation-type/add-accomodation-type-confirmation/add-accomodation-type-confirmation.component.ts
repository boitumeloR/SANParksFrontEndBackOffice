import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-add-accomodation-type-confirmation',
  templateUrl: './add-accomodation-type-confirmation.component.html',
  styleUrls: ['./add-accomodation-type-confirmation.component.scss']
})
export class AddAccomodationTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }
}
