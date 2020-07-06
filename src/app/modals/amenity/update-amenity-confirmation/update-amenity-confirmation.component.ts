import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateAmenitySuccessfulComponent} from 'src/app/modals/amenity/update-amenity-successful/update-amenity-successful.component';

@Component({
  selector: 'app-update-amenity-confirmation',
  templateUrl: './update-amenity-confirmation.component.html',
  styleUrls: ['./update-amenity-confirmation.component.scss']
})
export class UpdateAmenityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateAmenity(){
    const updateAmenitySuccessfulDialog = this.dialog.open(UpdateAmenitySuccessfulComponent);
  }
}
