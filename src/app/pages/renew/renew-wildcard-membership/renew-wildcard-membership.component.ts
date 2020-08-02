import { Component, OnInit } from '@angular/core';
import {MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {PurchaseWildcardConfirmationComponent} from 'src/app/pages/Purchase Wildcard/purchase-wildcard-confirmation/purchase-wildcard-confirmation.component';

@Component({
  selector: 'app-renew-wildcard-membership',
  templateUrl: './renew-wildcard-membership.component.html',
  styleUrls: ['./renew-wildcard-membership.component.scss']
})
export class RenewWildcardMembershipComponent implements OnInit {

  constructor(private dialog: MatDialog,private SnackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  cancelConfirmation(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }

  sendPaymentLink() { 
    this.SnackBar.open("The payment information email has been sent to the client.", "OK", {
      duration: 4500,
    });
  }
}
