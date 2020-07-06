import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteAmenitySuccessfulComponent } from 'src/app/modals/amenity/delete-amenity-successful/delete-amenity-successful.component';

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
}
