import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-accomodation-base-rate',
  templateUrl: './delete-accomodation-base-rate.component.html',
  styleUrls: ['./delete-accomodation-base-rate.component.scss']
})
export class DeleteAccomodationBaseRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
