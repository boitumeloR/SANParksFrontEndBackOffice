import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteAmenitySuccessfulComponent } from 'src/app/modals/amenity/delete-amenity-successful/delete-amenity-successful.component';
import { DeleteAmenityUnsuccessfulComponent } from 'src/app/modals/amenity/delete-amenity-unsuccessful/delete-amenity-unsuccessful.component';
@Component({
  selector: 'app-delete-amenity',
  templateUrl: './delete-amenity.component.html',
  styleUrls: ['./delete-amenity.component.scss']
})
export class DeleteAmenityComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteAmenity(){
    const deleteAmenitySuccessfulDialog = this.dialog.open(DeleteAmenitySuccessfulComponent);
  }

  unsuccessfulDeleteAmenity(){
    const deleteAmenityUnsuccessfulDialog = this.dialog.open(DeleteAmenityUnsuccessfulComponent);
  }
}
