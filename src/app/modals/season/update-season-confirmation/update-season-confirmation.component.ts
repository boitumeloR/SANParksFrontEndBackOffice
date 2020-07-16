import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateSeasonSuccessfulComponent} from 'src/app/modals/season/update-season-successful/update-season-successful.component';
import {UpdateSeasonUnsuccessfulComponent} from 'src/app/modals/season/update-season-unsuccessful/update-season-unsuccessful.component';

@Component({
  selector: 'app-update-season-confirmation',
  templateUrl: './update-season-confirmation.component.html',
  styleUrls: ['./update-season-confirmation.component.scss']
})
export class UpdateSeasonConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateSeason(){
    const updateSeasonSuccessfulDialog = this.dialog.open(UpdateSeasonSuccessfulComponent);
  }

  unsuccessfulUpdateSeason(){
    const updateSeasonUnsuccessfulDialog = this.dialog.open(UpdateSeasonUnsuccessfulComponent);
  }
}
