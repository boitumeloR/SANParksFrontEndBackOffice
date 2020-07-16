import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DelteSeasonSuccessfulComponent } from 'src/app/modals/season/delte-season-successful/delte-season-successful.component';
import { DeleteSeasonUnsuccessfulComponent } from 'src/app/modals/season/delete-season-unsuccessful/delete-season-unsuccessful.component';

@Component({
  selector: 'app-delete-season',
  templateUrl: './delete-season.component.html',
  styleUrls: ['./delete-season.component.scss']
})
export class DeleteSeasonComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteSeason(){
    const deleteSeasonSuccessfulDialog = this.dialog.open(DelteSeasonSuccessfulComponent);
  }

  unsuccessfulDeleteSeason(){
    const deleteSeasonUnsuccessfulDialog = this.dialog.open(DeleteSeasonUnsuccessfulComponent);
  }
}
