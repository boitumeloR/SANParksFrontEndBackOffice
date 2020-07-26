import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateWildcardRateConfirmationComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate-confirmation/update-wildcard-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-wildcard-rate',
  templateUrl: './update-wildcard-rate.component.html',
  styleUrls: ['./update-wildcard-rate.component.scss']
})
export class UpdateWildcardRateComponent implements OnInit {
  updateWildcardRateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateWildcardRateComponent>) { }

  ngOnInit(): void {
    this.updateWildcardRateForm = this.formBuilder.group({
      wildcardCluster: ['', Validators.required],
      wildcardCategory : ['', Validators.required],
      wildcardRate : ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
    });
  }

  updateWildcardRate(){
    if(this.updateWildcardRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateWildCardRateConfirmation = this.dialog.open(UpdateWildcardRateConfirmationComponent);
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if(result == true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open("The entered details are not in the correct format. Please try again.", "OK", {
      duration: 3500,
    });
  }
}
