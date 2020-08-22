import { Component, OnInit } from '@angular/core';
import { DeleteAccomodationComponent } from 'src/app/modals/accomodation/delete-accomodation/delete-accomodation.component';
import { UpdateAccomodationComponent } from 'src/app/modals/accomodation/update-accomodation/update-accomodation.component';
import { MatDialog } from '@angular/material/dialog';
import { Accommodation, AccommodationService } from 'src/app/services/Accommodation/accommodation.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-view-accomodation',
  templateUrl: './view-accomodation.component.html',
  styleUrls: ['./view-accomodation.component.scss']
})
export class ViewAccomodationComponent implements OnInit {

  constructor(private dialog: MatDialog, private accommodationService: AccommodationService, private globalService: GlobalService) { }
  accommodation;

  ngOnInit(): void {
    this.accommodation = JSON.parse(localStorage.getItem('accomodation'));
  }

  updateAccomodation(){
    const updateAccomodationDialog = this.dialog.open(UpdateAccomodationComponent, {disableClose: true});
  }
  deleteAccomodation(){
    const deleteAccomodationDialog = this.dialog.open(DeleteAccomodationComponent);

    deleteAccomodationDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.accommodationService.deleteAccommodation(this.accommodation.AccommodationID, this.globalService.GetServer());
      }
    });
  }
}
