import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAmenityPenaltySuccessfulComponent} from 'src/app/modals/amenity-penalty/add-amenity-penalty-successful/add-amenity-penalty-successful.component';

@Component({
  selector: 'app-add-amenity-penalty-confirmation',
  templateUrl: './add-amenity-penalty-confirmation.component.html',
  styleUrls: ['./add-amenity-penalty-confirmation.component.scss']
})
export class AddAmenityPenaltyConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddAmenityPenalty(){
    const addAmenityPenaltySuccessfulDialog = this.dialog.open(AddAmenityPenaltySuccessfulComponent);
  }
}
