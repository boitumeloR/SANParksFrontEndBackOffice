import { Component, OnInit } from '@angular/core';
import {AddSeasonConfirmationComponent} from 'src/app/modals/season/add-season-confirmation/add-season-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.scss']
})
export class AddSeasonComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addSeason(){
    const addSeasonConfirmationDialog = this.dialog.open(AddSeasonConfirmationComponent);
  }
}
