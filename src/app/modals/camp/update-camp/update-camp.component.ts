import { Component, OnInit } from '@angular/core';
import {UpdateCampConfirmationComponent} from 'src/app/modals/camp/update-camp-confirmation/update-camp-confirmation.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-camp',
  templateUrl: './update-camp.component.html',
  styleUrls: ['./update-camp.component.scss']
})
export class UpdateCampComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updateCamp(){
    const udpateCampDialog = this.dialog.open(UpdateCampConfirmationComponent)
  }
}
