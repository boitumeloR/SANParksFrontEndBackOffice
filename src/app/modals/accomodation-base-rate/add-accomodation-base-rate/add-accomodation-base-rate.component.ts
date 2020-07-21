import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationBaseRateConfirmationComponent} from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate-confirmation/add-accomodation-base-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-add-accomodation-base-rate',
  templateUrl: './add-accomodation-base-rate.component.html',
  styleUrls: ['./add-accomodation-base-rate.component.scss']
})
export class AddAccomodationBaseRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAccomodationBaseRate(){
    const addAccomodationBaseRateConfirmation = this.dialog.open(AddAccomodationBaseRateConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
