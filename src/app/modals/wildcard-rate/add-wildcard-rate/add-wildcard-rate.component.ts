import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddWildcardRateConfirmationComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-confirmation/add-wildcard-rate-confirmation.component'

@Component({
  selector: 'app-add-wildcard-rate',
  templateUrl: './add-wildcard-rate.component.html',
  styleUrls: ['./add-wildcard-rate.component.scss']
})
export class AddWildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addWildcardRate(){
    const addWildcardRateConfirmation = this.dialog.open(AddWildcardRateConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
