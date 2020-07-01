import { Component, OnInit } from '@angular/core';
import {UpdateAmenityComponent } from 'src/app/modals/amenity/update-amenity/update-amenity.component';
import {DeleteAmenityComponent } from 'src/app/modals/amenity/delete-amenity/delete-amenity.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-amenity',
  templateUrl: './view-amenity.component.html',
  styleUrls: ['./view-amenity.component.scss']
})
export class ViewAmenityComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  updateAmenity(){
    const updateAmenityDialog = this.dialog.open(UpdateAmenityComponent,{disableClose: true});
  }

  deleteAmenity(){
    const deleteAmenityDialog = this.dialog.open(DeleteAmenityComponent);
  }
}
