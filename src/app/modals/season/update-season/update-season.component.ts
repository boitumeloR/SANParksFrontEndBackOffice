import { Component, OnInit } from '@angular/core';
import {UpdateSeasonConfirmationComponent} from 'src/app/modals/season/update-season-confirmation/update-season-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-season',
  templateUrl: './update-season.component.html',
  styleUrls: ['./update-season.component.scss']
})
export class UpdateSeasonComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateSeason(){
    const updateSeasonConfirmationDialog =  this.dialog.open(UpdateSeasonConfirmationComponent);
  }
}