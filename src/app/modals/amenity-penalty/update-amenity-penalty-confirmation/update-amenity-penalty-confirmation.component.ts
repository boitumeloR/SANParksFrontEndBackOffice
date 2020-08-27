import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-amenity-penalty-confirmation',
  templateUrl: './update-amenity-penalty-confirmation.component.html',
  styleUrls: ['./update-amenity-penalty-confirmation.component.scss']
})
export class UpdateAmenityPenaltyConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
