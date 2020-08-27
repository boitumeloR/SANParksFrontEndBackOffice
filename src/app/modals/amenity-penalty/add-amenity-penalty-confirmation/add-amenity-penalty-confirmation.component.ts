import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-amenity-penalty-confirmation',
  templateUrl: './add-amenity-penalty-confirmation.component.html',
  styleUrls: ['./add-amenity-penalty-confirmation.component.scss']
})
export class AddAmenityPenaltyConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
