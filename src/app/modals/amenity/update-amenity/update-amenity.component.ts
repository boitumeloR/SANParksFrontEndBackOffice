import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAmenityConfirmationComponent } from 'src/app/modals/amenity/update-amenity-confirmation/update-amenity-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-update-amenity',
  templateUrl: './update-amenity.component.html',
  styleUrls: ['./update-amenity.component.scss']
})
export class UpdateAmenityComponent implements OnInit {

  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAmenity(){
    const updateAmenityConfirmationDialog = this.dialog.open(UpdateAmenityConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
