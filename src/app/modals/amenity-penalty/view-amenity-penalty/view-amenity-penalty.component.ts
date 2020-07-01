import { Component, OnInit } from '@angular/core';
import {UpdateAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/update-amenity-penalty/update-amenity-penalty.component';
import { DeleteAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/delete-amenity-penalty/delete-amenity-penalty.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-view-amenity-penalty',
  templateUrl: './view-amenity-penalty.component.html',
  styleUrls: ['./view-amenity-penalty.component.scss']
})
export class ViewAmenityPenaltyComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAmenityPenalty(){
    const updateAmenityPenaltyDialog = this.dialog.open(UpdateAmenityPenaltyComponent,{disableClose: true});
  }

  deleteAmenityPenalty(){
    const deleteAmenityPenaltyDialog = this.dialog.open(DeleteAmenityPenaltyComponent);
  }
}
