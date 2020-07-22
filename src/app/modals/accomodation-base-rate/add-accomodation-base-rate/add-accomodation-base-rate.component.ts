import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationBaseRateConfirmationComponent} from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate-confirmation/add-accomodation-base-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-accomodation-base-rate',
  templateUrl: './add-accomodation-base-rate.component.html',
  styleUrls: ['./add-accomodation-base-rate.component.scss']
})
export class AddAccomodationBaseRateComponent implements OnInit {
  addAccomodationBaseRateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAccomodationBaseRateComponent>) { }

  ngOnInit(): void {
    this.addAccomodationBaseRateForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      baseRate : ['', [Validators.required, Validators.min(1)]]
    });
  }

  addAccomodationBaseRate(){
    if(this.addAccomodationBaseRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addAccomodationBaseRateConfirmation = this.dialog.open(AddAccomodationBaseRateConfirmationComponent);
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
