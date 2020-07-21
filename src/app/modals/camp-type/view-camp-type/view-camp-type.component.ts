import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateCampTypeComponent} from 'src/app/modals/camp-type/update-camp-type/update-camp-type.component';
import {DeleteCampTypeComponent} from 'src/app/modals/camp-type/delete-camp-type/delete-camp-type.component';

@Component({
  selector: 'app-view-camp-type',
  templateUrl: './view-camp-type.component.html',
  styleUrls: ['./view-camp-type.component.scss']
})
export class ViewCampTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateCampType(){
    const updateCampTypeDialog = this.dialog.open(UpdateCampTypeComponent,{disableClose: true});
  }

  deleteCampType(){
    const deleteCampTypeDialog = this.dialog.open(DeleteCampTypeComponent);
  }
}
