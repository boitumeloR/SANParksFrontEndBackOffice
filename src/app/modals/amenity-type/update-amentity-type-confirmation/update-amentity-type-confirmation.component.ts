import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/update-amenity-type-successful/update-amenity-type-successful.component';

@Component({
  selector: 'app-update-amentity-type-confirmation',
  templateUrl: './update-amentity-type-confirmation.component.html',
  styleUrls: ['./update-amentity-type-confirmation.component.scss']
})
export class UpdateAmentityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateAmenityType(){
    const updateAmenityTypeSuccessfulDialog = this.dialog.open(UpdateAmenityTypeSuccessfulComponent);
  }
}
