import { Component, OnInit } from '@angular/core';
import { DeleteAccomodationComponent } from 'src/app/modals/accomodation/delete-accomodation/delete-accomodation.component';
import { UpdateAccomodationComponent } from 'src/app/modals/accomodation/update-accomodation/update-accomodation.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-accomodation',
  templateUrl: './view-accomodation.component.html',
  styleUrls: ['./view-accomodation.component.scss']
})
export class ViewAccomodationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAccomodation(){
    const updateAccomodationDialog = this.dialog.open(UpdateAccomodationComponent,{disableClose: true});
  }
  deleteAccomodation(){
    const deleteAccomodationDialog = this.dialog.open(DeleteAccomodationComponent);
  }
}
