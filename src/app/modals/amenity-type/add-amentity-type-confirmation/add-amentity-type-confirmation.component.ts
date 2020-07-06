import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAmenityTypeSuccessfulComponent} from 'src/app/modals/amenity-type/add-amenity-type-successful/add-amenity-type-successful.component';

@Component({
  selector: 'app-add-amentity-type-confirmation',
  templateUrl: './add-amentity-type-confirmation.component.html',
  styleUrls: ['./add-amentity-type-confirmation.component.scss']
})
export class AddAmentityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddAmenityType(){
    const addAmenityTypeSuccessfulDialog = this.dialog.open(AddAmenityTypeSuccessfulComponent);
  }
}
