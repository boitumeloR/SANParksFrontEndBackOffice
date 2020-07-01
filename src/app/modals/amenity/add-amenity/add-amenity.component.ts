import { Component, OnInit } from '@angular/core';
import { AddAmenityConfirmationComponent } from 'src/app/modals/amenity/add-amenity-confirmation/add-amenity-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-add-amenity',
  templateUrl: './add-amenity.component.html',
  styleUrls: ['./add-amenity.component.scss']
})
export class AddAmenityComponent implements OnInit {

  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAmenity(){
    const addAmenityConfirmationDialog = this.dialog.open(AddAmenityConfirmationComponent)
  }
}
