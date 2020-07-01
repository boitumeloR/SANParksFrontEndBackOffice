import { Component, OnInit } from '@angular/core';
import { DeleteAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate/delete-accomodation-add-rate.component';
import { UpdateAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate/update-accomodation-add-rate.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-accomodation-add-rate',
  templateUrl: './view-accomodation-add-rate.component.html',
  styleUrls: ['./view-accomodation-add-rate.component.scss']
})
export class ViewAccomodationAddRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAccomodationAddRate(){
    const updateAccomodationAddRateDialog = this.dialog.open(UpdateAccomodationAddRateComponent,{disableClose: true});
  }

  deleteAccomodationAddRate(){
    const deleteAccomodationAddRateDialog = this.dialog.open(DeleteAccomodationAddRateComponent);
  }
}
