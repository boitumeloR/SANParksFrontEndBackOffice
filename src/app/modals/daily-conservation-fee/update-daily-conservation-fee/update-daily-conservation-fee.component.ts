import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-confirmation/update-daily-conservation-fee-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-daily-conservation-fee',
  templateUrl: './update-daily-conservation-fee.component.html',
  styleUrls: ['./update-daily-conservation-fee.component.scss']
})
export class UpdateDailyConservationFeeComponent implements OnInit {
  updateDailyConservationFeeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateDailyConservationFeeComponent>) { }

  ngOnInit(): void {
    this.updateDailyConservationFeeForm = this.formBuilder.group({
      park: ['', Validators.required],
      region : ['', Validators.required],
      childAmount : ['', [Validators.required, Validators.min(1)]],
      adultAmount : ['', [Validators.required, Validators.min(1)]],
      dateEffective: ['',Validators.required]
    });
  }

  updateDailyConservationFee(){
    if(this.updateDailyConservationFeeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
    const updateDailyConservationFeeConfirmationDialog =  this.dialog.open(UpdateDailyConservationFeeConfirmationComponent);
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
