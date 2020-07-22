import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddWildcardRateConfirmationComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-confirmation/add-wildcard-rate-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-wildcard-rate',
  templateUrl: './add-wildcard-rate.component.html',
  styleUrls: ['./add-wildcard-rate.component.scss']
})
export class AddWildcardRateComponent implements OnInit {
  addWildcardRateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddWildcardRateComponent>) { }

  ngOnInit(): void {
    this.addWildcardRateForm = this.formBuilder.group({
      wildcardCluster: ['', Validators.required],
      wildcardCategory : ['', Validators.required],
      wildcardRate : ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
    });
  }

  addWildcardRate(){
    if(this.addWildcardRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addWildcardRateConfirmation = this.dialog.open(AddWildcardRateConfirmationComponent);
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
