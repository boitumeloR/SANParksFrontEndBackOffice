import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-confirmation/add-daily-conservation-fee-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-daily-conservation-fee',
  templateUrl: './add-daily-conservation-fee.component.html',
  styleUrls: ['./add-daily-conservation-fee.component.scss']
})
export class AddDailyConservationFeeComponent implements OnInit {
  addDailyConservationFeeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddDailyConservationFeeComponent>) { }

  ngOnInit(): void {
    this.addDailyConservationFeeForm = this.formBuilder.group({
      park: ['', Validators.required],
      region : ['', Validators.required],
      childAmount : ['', [Validators.required, Validators.min(1)]],
      adultAmount : ['', [Validators.required, Validators.min(1)]],
      dateEffective: ['',Validators.required]
    });
  }
  
  addDailyConservationFee(){
    if(this.addDailyConservationFeeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addDailyConservationFeeConfirmation = this.dialog.open(AddDailyConservationFeeConfirmationComponent);
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
