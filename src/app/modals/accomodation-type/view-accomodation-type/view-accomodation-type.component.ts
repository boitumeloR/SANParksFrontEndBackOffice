import { Component, OnInit } from '@angular/core';
import {UpdateAccomodationTypeComponent} from 'src/app/modals/accomodation-type/update-accomodation-type/update-accomodation-type.component';
import {DeleteAccomodationTypeComponent} from 'src/app/modals/accomodation-type/delete-accomodation-type/delete-accomodation-type.component';
import {MatDialog} from '@angular/material/dialog';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-accomodation-type',
  templateUrl: './view-accomodation-type.component.html',
  styleUrls: ['./view-accomodation-type.component.scss']
})
export class ViewAccomodationTypeComponent implements OnInit {
  accommodationType;
  listOfImages = [];

  constructor(private dialog: MatDialog, private accommodationTypeService: AccommodationTypeService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.accommodationType = JSON.parse(localStorage.getItem('accommodationType'));

    this.accommodationType.ListOfImages.forEach(element => {
      this.listOfImages.push('data:image/png;base64,' + element.ImageInBase64);
    });
  }

  updateAccomodationType(){
    const updateAccomodationTypeDialog = this.dialog.open(UpdateAccomodationTypeComponent, {disableClose: true});
  }
  deleteAccomodationType(){
    const deleteAccomodationTypeTypeDialog = this.dialog.open(DeleteAccomodationTypeComponent);

    deleteAccomodationTypeTypeDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.accommodationTypeService.deleteAccommodationType(authenticateUser, this.accommodationType.AccommodationTypeID,
          this.globalService.GetServer());
      }
    });
  }
}
