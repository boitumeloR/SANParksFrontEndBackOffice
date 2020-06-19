import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateCampTypeConfirmationComponent} from 'src/app/modals/camp-type/update-camp-type-confirmation/update-camp-type-confirmation.component';
@Component({
  selector: 'app-update-camp-type',
  templateUrl: './update-camp-type.component.html',
  styleUrls: ['./update-camp-type.component.scss']
})
export class UpdateCampTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updateCampType(){
    const UpdateCampTypeConfirmation = this.dialog.open(UpdateCampTypeConfirmationComponent);
  }
}
