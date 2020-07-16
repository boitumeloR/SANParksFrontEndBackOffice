import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteCampTypeSuccessfulComponent } from 'src/app/modals/camp-type/delete-camp-type-successful/delete-camp-type-successful.component';
import { DeleteCampTypeUnsuccessfulComponent } from 'src/app/modals/camp-type/delete-camp-type-unsuccessful/delete-camp-type-unsuccessful.component';

@Component({
  selector: 'app-delete-camp-type',
  templateUrl: './delete-camp-type.component.html',
  styleUrls: ['./delete-camp-type.component.scss']
})
export class DeleteCampTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteCampType(){
    const deleteCampTypeSuccessfulDialog = this.dialog.open(DeleteCampTypeSuccessfulComponent);
  }

  unsuccessfulDeleteCampType(){
    const deleteCampTypeUnsuccessfulDialog = this.dialog.open(DeleteCampTypeUnsuccessfulComponent);
  }
}
