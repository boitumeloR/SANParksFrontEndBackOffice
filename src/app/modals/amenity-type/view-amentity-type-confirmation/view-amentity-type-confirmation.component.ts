import { Component, OnInit } from '@angular/core';
import { UpdateAmentityTypeComponent} from 'src/app/modals/amenity-type/update-amentity-type/update-amentity-type.component';
import { DeleteAmentityTypeConfirmationComponent} from 'src/app/modals/amenity-type/delete-amentity-type-confirmation/delete-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityType, AmenityTypeService } from 'src/app/services/AmenityType/amenity-type.service';
import {GlobalService} from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-amentity-type-confirmation',
  templateUrl: './view-amentity-type-confirmation.component.html',
  styleUrls: ['./view-amentity-type-confirmation.component.scss']
})
export class ViewAmentityTypeConfirmationComponent implements OnInit {
amenityType: AmenityType;

  constructor(private dialog: MatDialog, private globalService: GlobalService, private activityTypeService: AmenityTypeService) { }

  ngOnInit(): void {
    this.amenityType = JSON.parse(localStorage.getItem('amenityType'));
  }

  updateAmenityType(){
    const updateCampDialog = this.dialog.open(UpdateAmentityTypeComponent, {disableClose: true});
  }

  deleteAmenityType(){
    const deleteAmenityTypeConfirmation =  this.dialog.open(DeleteAmentityTypeConfirmationComponent);
    deleteAmenityTypeConfirmation.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.activityTypeService.deleteAmenityType(authenticateUser, this.amenityType.AmenityTypeID, this.globalService.GetServer());
      }
    });
  }
}
