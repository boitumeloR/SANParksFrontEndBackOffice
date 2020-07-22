import { Component, OnInit } from '@angular/core';
import {UpdateAccomodationTypeComponent} from 'src/app/modals/accomodation-type/update-accomodation-type/update-accomodation-type.component';
import {DeleteAccomodationTypeComponent} from 'src/app/modals/accomodation-type/delete-accomodation-type/delete-accomodation-type.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-accomodation-type',
  templateUrl: './view-accomodation-type.component.html',
  styleUrls: ['./view-accomodation-type.component.scss']
})
export class ViewAccomodationTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAccomodationType(){
    const updateAccomodationTypeDialog = this.dialog.open(UpdateAccomodationTypeComponent,{disableClose: true})
  }
  deleteAccomodationType(){
    const deleteAccomodationTypeTypeDialog = this.dialog.open(DeleteAccomodationTypeComponent);
  }
}
