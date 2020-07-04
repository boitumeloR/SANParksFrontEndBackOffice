import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAmentityTypeConfirmationComponent} from 'src/app/modals/amenity-type/add-amentity-type-confirmation/add-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-amentity-type',
  templateUrl: './add-amentity-type.component.html',
  styleUrls: ['./add-amentity-type.component.scss']
})
export class AddAmentityTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAmenityType(){
    const addCampDialog = this.dialog.open(AddAmentityTypeConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
