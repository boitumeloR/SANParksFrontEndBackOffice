import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateAmentityTypeConfirmationComponent} from 'src/app/modals/amenity-type/update-amentity-type-confirmation/update-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-amentity-type',
  templateUrl: './update-amentity-type.component.html',
  styleUrls: ['./update-amentity-type.component.scss']
})
export class UpdateAmentityTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAmenityType(){
    const udpateAmenityTypeConfirmationDialog = this.dialog.open(UpdateAmentityTypeConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
