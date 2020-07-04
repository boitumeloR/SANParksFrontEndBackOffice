import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddCampTypeConfirmationComponent} from 'src/app/modals/camp-type/add-camp-type-confirmation/add-camp-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-camp-type',
  templateUrl: './add-camp-type.component.html',
  styleUrls: ['./add-camp-type.component.scss']
})
export class AddCampTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addCampType(){
    const addCampTypeDialog =  this.dialog.open(AddCampTypeConfirmationComponent,{disableClose: true});
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
