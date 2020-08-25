import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-accomodation-add-rate',
  templateUrl: './delete-accomodation-add-rate.component.html',
  styleUrls: ['./delete-accomodation-add-rate.component.scss']
})
export class DeleteAccomodationAddRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
