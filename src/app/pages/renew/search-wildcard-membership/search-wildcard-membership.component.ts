import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {UpdateWildcardStatusConfirmationComponent} from 'src/app/pages/renew/update-wildcard-status-confirmation/update-wildcard-status-confirmation.component'
import {RenewWildcardMembershipComponent} from 'src/app/pages/renew/renew-wildcard-membership/renew-wildcard-membership.component'
@Component({
  selector: 'app-search-wildcard-membership',
  templateUrl: './search-wildcard-membership.component.html',
  styleUrls: ['./search-wildcard-membership.component.scss']
})
export class SearchWildcardMembershipComponent implements OnInit {
  wildcardFound: boolean;
  searchWildcardMembershipForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.wildcardNotFound();
    this.searchWildcardMembershipForm = this.formBuilder.group({
      wildcardNumber: ['', Validators.required]
    });
  }

  updateWildcard(){
    const updateWildcardStatusDialog = this.dialog.open(UpdateWildcardStatusConfirmationComponent);
  }

  renewWildcard(){
    const renewWildcardMembershipDialog = this.dialog.open(RenewWildcardMembershipComponent);
  }

  searchWildcardMembership(){
    if(this.searchWildcardMembershipForm.invalid){
      this.displayValidationError();
    }
    else{
      this.wildcardFound = true;
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }

  wildcardNotFound() {
    this.validationErrorSnackBar.open("There is no wildcard membership that matches the entered parameter", "OK", {
      duration: 7000,
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open("The entered details are not in the correct format. Please try again.", "OK", {
      duration: 3500,
    });
  }
}
