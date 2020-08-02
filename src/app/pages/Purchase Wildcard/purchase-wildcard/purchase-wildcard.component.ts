import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {PurchaseWildcardConfirmationComponent} from 'src/app/pages/Purchase Wildcard/purchase-wildcard-confirmation/purchase-wildcard-confirmation.component';


@Component({
  selector: 'app-purchase-wildcard',
  templateUrl: './purchase-wildcard.component.html',
  styleUrls: ['./purchase-wildcard.component.scss']
})
export class PurchaseWildcardComponent implements OnInit {
  searchClientForm:FormGroup;
  purchaseWildcardForm: FormGroup;
  clientFound: boolean;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.clientNotFound();
    this.searchClientForm = this.formBuilder.group({
      identityNUmber: ['', Validators.required]
    });

    this.purchaseWildcardForm = this.formBuilder.group({
      wildcardCluster: ['', Validators.required],
      wildcardCategory : ['', Validators.required]
    }); 
  }

  searchClient(){
    if(this.searchClientForm.invalid){
      this.displayValidationError();
    }
    else{
      this.clientFound = true;
    }
  }

  purchaseWildcard(){
    if(this.purchaseWildcardForm.invalid){
      this.displayValidationError();
    }
    else{
      const purchaseConfirmation = this.dialog.open(PurchaseWildcardConfirmationComponent);
    }
  }

  
  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }

  clientNotFound() {
    this.validationErrorSnackBar.open("There is no client that matches the entered parameter", "OK", {
      duration: 7000,
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open("The entered details are not in the correct format. Please try again.", "OK", {
      duration: 3500,
    });
  }
}
