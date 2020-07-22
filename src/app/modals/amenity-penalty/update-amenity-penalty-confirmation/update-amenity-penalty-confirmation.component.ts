import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateAmenityPenaltySuccessfulComponent} from 'src/app/modals/amenity-penalty/update-amenity-penalty-successful/update-amenity-penalty-successful.component';
import {UpdateAmenityPenaltyUnsuccessfulComponent} from 'src/app/modals/amenity-penalty/update-amenity-penalty-unsuccessful/update-amenity-penalty-unsuccessful.component';

@Component({
  selector: 'app-update-amenity-penalty-confirmation',
  templateUrl: './update-amenity-penalty-confirmation.component.html',
  styleUrls: ['./update-amenity-penalty-confirmation.component.scss']
})
export class UpdateAmenityPenaltyConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateAmenityPenalty(){
    const updateAmenityPenaltySuccessfulDialog = this.dialog.open(UpdateAmenityPenaltySuccessfulComponent);
  }

  unsuccessfulUpdateAmenityPenalty(){
    const updateAmenityPenaltyUnsuccessfulDialog = this.dialog.open(UpdateAmenityPenaltyUnsuccessfulComponent);
  }
}
