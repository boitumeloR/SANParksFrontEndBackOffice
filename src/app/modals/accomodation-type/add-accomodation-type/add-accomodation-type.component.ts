import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationTypeConfirmationComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-confirmation/add-accomodation-type-confirmation.component'
@Component({
  selector: 'app-add-accomodation-type',
  templateUrl: './add-accomodation-type.component.html',
  styleUrls: ['./add-accomodation-type.component.scss']
})
export class AddAccomodationTypeComponent implements OnInit {

  basicAccomodationTypeDetails: FormGroup;
  campsForAccomodationType: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAccomodationType(){
    const addAccomodationTypeConfirmationDialog = this.dialog.open(AddAccomodationTypeConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
