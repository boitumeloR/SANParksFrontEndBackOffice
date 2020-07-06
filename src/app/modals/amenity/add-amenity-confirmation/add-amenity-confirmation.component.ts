import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAmenitySuccessfulComponent} from 'src/app/modals/amenity/add-amenity-successful/add-amenity-successful.component';

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
}
