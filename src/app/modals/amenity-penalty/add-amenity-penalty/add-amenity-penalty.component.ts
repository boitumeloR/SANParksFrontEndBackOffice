import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddAmenityPenaltyConfirmationComponent } from 'src/app/modals/amenity-penalty/add-amenity-penalty-confirmation/add-amenity-penalty-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-amenity-penalty',
  templateUrl: './add-amenity-penalty.component.html',
  styleUrls: ['./add-amenity-penalty.component.scss']
})
export class AddAmenityPenaltyComponent implements OnInit {

  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAmenityPenalty(){
    const addAmenityPenaltyConfirmationDialog = this.dialog.open(AddAmenityPenaltyConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
