import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateWildcardRateConfirmationComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate-confirmation/update-wildcard-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-wildcard-rate',
  templateUrl: './update-wildcard-rate.component.html',
  styleUrls: ['./update-wildcard-rate.component.scss']
})
export class UpdateWildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateWildcardRate(){
    const updateWildCardRateConfirmation = this.dialog.open(UpdateWildcardRateConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
