import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddSeasonSuccessfulComponent} from 'src/app/modals/season/add-season-successful/add-season-successful.component';
import {AddSeasonUnsuccessfulComponent} from 'src/app/modals/season/add-season-unsuccessful/add-season-unsuccessful.component';
@Component({
  selector: 'app-add-season-confirmation',
  templateUrl: './add-season-confirmation.component.html',
  styleUrls: ['./add-season-confirmation.component.scss']
})
export class AddSeasonConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  successfulAddSeason(){
    const addSeasonSuccessfulDialog = this.dialog.open(AddSeasonSuccessfulComponent);
  }

  unsuccessfulAddSeason(){
    const addSeasonUnsuccessfulDialog = this.dialog.open(AddSeasonUnsuccessfulComponent);
  }
}