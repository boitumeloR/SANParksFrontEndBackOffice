import { Component, OnInit } from '@angular/core';
import {UpdateAmenityComponent } from 'src/app/modals/amenity/update-amenity/update-amenity.component';
import {DeleteAmenityComponent } from 'src/app/modals/amenity/delete-amenity/delete-amenity.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityService } from 'src/app/services/Amenity/amenity.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-amenity',
  templateUrl: './view-amenity.component.html',
  styleUrls: ['./view-amenity.component.scss']
})
export class ViewAmenityComponent implements OnInit {

  constructor(private dialog: MatDialog, private amenityService: AmenityService, private globalService: GlobalService) { }
  amenity;
  ngOnInit(): void {
    this.amenity = JSON.parse(localStorage.getItem('amenity'));
  }

  updateAmenity(){
    const updateAmenityDialog = this.dialog.open(UpdateAmenityComponent, {disableClose: true});
  }

  deleteAmenity(){
    const deleteAmenityDialog = this.dialog.open(DeleteAmenityComponent);

    deleteAmenityDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.amenityService.deleteAmenity(this.amenity.AmenityID, this.globalService.GetServer());
      }
    });
  }
}
