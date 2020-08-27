import { Component, OnInit } from '@angular/core';
import {UpdateAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/update-amenity-penalty/update-amenity-penalty.component';
import { DeleteAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty/delete-amenity-penalty.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityPenaltyService } from 'src/app/services/AmenityPenalty/amenity-penalty.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-amenity-penalty',
  templateUrl: './view-amenity-penalty.component.html',
  styleUrls: ['./view-amenity-penalty.component.scss']
})
export class ViewAmenityPenaltyComponent implements OnInit {
  amenityPenalty;
  constructor(private dialog: MatDialog, private amenityPenaltyService: AmenityPenaltyService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.amenityPenalty = JSON.parse(localStorage.getItem('amenityPenalty'));
  }

  updateAmenityPenalty(){
    const updateAmenityPenaltyDialog = this.dialog.open(UpdateAmenityPenaltyComponent,{disableClose: true});
  }

  deleteAmenityPenalty(){
    const deleteAmenityPenaltyDialog = this.dialog.open(DeleteAmenityPenaltyComponent);

    deleteAmenityPenaltyDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.amenityPenaltyService.deleteAmenityPenalty(this.amenityPenalty.AmenityPenaltyID, this.globalService.GetServer());
      }
    });
  }
}
