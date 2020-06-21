import { Component, OnInit } from '@angular/core';
import {UpdateCampComponent} from 'src/app/modals/camp/update-camp/update-camp.component';
import {DeleteCampComponent} from 'src/app/modals/camp/delete-camp/delete-camp.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-camp',
  templateUrl: './view-camp.component.html',
  styleUrls: ['./view-camp.component.scss']
})
export class ViewCampComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateCamp(){
    const updateCampDialog = this.dialog.open(UpdateCampComponent,{disableClose: true});
  }

  deleteCamp(){
    const deleteCampDialog = this.dialog.open(DeleteCampComponent);
  }
}
