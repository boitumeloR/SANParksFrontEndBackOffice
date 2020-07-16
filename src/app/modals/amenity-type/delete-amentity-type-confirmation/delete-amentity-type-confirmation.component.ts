import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteAmenityTypeSuccessfulComponent } from 'src/app/modals/amenity-type/delete-amenity-type-successful/delete-amenity-type-successful.component';
import { DeleteAmenityTypeUnsuccessfulComponent } from 'src/app/modals/amenity-type/delete-amenity-type-unsuccessful/delete-amenity-type-unsuccessful.component';

@Component({
  selector: 'app-delete-amentity-type-confirmation',
  templateUrl: './delete-amentity-type-confirmation.component.html',
  styleUrls: ['./delete-amentity-type-confirmation.component.scss']
})
export class DeleteAmentityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteAmenityType(){
    const deleteAmenityTypeSuccessfulDialog = this.dialog.open(DeleteAmenityTypeSuccessfulComponent);
  }

  unsuccessfulDeleteAmenityType(){
    const deleteAmenityTypeUnsuccessfulDialog = this.dialog.open(DeleteAmenityTypeUnsuccessfulComponent);
  }
}
