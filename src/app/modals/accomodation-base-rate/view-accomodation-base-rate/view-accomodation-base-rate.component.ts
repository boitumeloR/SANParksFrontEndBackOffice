import { Component, OnInit } from '@angular/core';
import { DeleteAccomodationBaseRateComponent } from 'src/app/modals/accomodation-base-rate/delete-accomodation-base-rate/delete-accomodation-base-rate.component';
import { UpdateAccomodationBaseRateComponent } from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate/update-accomodation-base-rate.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-accomodation-base-rate',
  templateUrl: './view-accomodation-base-rate.component.html',
  styleUrls: ['./view-accomodation-base-rate.component.scss']
})
export class ViewAccomodationBaseRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAccomodationBaseRate(){
    const updateAccomodationBaseRateDialog = this.dialog.open(UpdateAccomodationBaseRateComponent,{disableClose: true});
  }

  deleteAccomodationBaseRate(){
    const deleteAccomodationBaseRateDialog = this.dialog.open(DeleteAccomodationBaseRateComponent);
  }
}
