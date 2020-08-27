import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-amenity-confirmation',
  templateUrl: './update-amenity-confirmation.component.html',
  styleUrls: ['./update-amenity-confirmation.component.scss']
})
export class UpdateAmenityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
