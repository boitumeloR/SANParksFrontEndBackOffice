import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAmenitySuccessfulComponent} from 'src/app/modals/amenity/add-amenity-successful/add-amenity-successful.component';
import {AddAmenityUnsuccessfulComponent} from 'src/app/modals/amenity/add-amenity-unsuccessful/add-amenity-unsuccessful.component';
@Component({
  selector: 'app-add-amenity-confirmation',
  templateUrl: './add-amenity-confirmation.component.html',
  styleUrls: ['./add-amenity-confirmation.component.scss']
})
export class AddAmenityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddAmenity(){
    const addAmenitySuccessfulDialog = this.dialog.open(AddAmenitySuccessfulComponent);
  }

  unsuccessfulAddAmenity(){
    const addAmenityUnsuccessfulDialog = this.dialog.open(AddAmenityUnsuccessfulComponent);
  }
}
