import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteAmenityPenaltySuccessfulComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty-successful/delete-amenity-penalty-successful.component';
import { DeleteAmenityPenaltyUnsuccessfulComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty-unsuccessful/delete-amenity-penalty-unsuccessful.component';
@Component({
  selector: 'app-delete-amenity-penalty',
  templateUrl: './delete-amenity-penalty.component.html',
  styleUrls: ['./delete-amenity-penalty.component.scss']
})
export class DeleteAmenityPenaltyComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteAmenityPenalty(){
    const deleteAmenityPenaltySuccessfulDialog = this.dialog.open(DeleteAmenityPenaltySuccessfulComponent);
  }

  unsuccessfulDeleteAmenityPenalty(){
    const deleteAmenityPenaltyUnsuccessfulDialog = this.dialog.open(DeleteAmenityPenaltyUnsuccessfulComponent);
  }
}
