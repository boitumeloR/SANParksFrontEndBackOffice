import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-accomodation',
  templateUrl: './delete-accomodation.component.html',
  styleUrls: ['./delete-accomodation.component.scss']
})
export class DeleteAccomodationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
