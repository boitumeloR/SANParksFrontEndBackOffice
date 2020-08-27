import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-amenity-confirmation',
  templateUrl: './add-amenity-confirmation.component.html',
  styleUrls: ['./add-amenity-confirmation.component.scss']
})
export class AddAmenityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
