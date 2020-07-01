import { Component, OnInit } from '@angular/core';
import { UpdateAmentityTypeComponent} from 'src/app/modals/amenity-type/update-amentity-type/update-amentity-type.component';
import { DeleteAmentityTypeConfirmationComponent} from 'src/app/modals/amenity-type/delete-amentity-type-confirmation/delete-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-amentity-type-confirmation',
  templateUrl: './view-amentity-type-confirmation.component.html',
  styleUrls: ['./view-amentity-type-confirmation.component.scss']
})
export class ViewAmentityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAmenityType(){
    const updateCampDialog = this.dialog.open(UpdateAmentityTypeComponent,{disableClose: true});
  }
  
  deleteAmenityType(){
    const deleteCampDialog = this.dialog.open(DeleteAmentityTypeConfirmationComponent);
  }
}
