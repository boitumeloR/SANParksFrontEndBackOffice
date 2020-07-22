import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationAddRateConfirmationComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-confirmation/add-accomodation-add-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-accomodation-add-rate',
  templateUrl: './add-accomodation-add-rate.component.html',
  styleUrls: ['./add-accomodation-add-rate.component.scss']
})
export class AddAccomodationAddRateComponent implements OnInit {
  addAccomodationRateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAccomodationAddRateComponent>) { }

  ngOnInit(): void {
    this.addAccomodationRateForm = this.formBuilder.group({
      accomodationType: ['', Validators.required],
      adultRate : ['', [Validators.required, Validators.min(1)]],
      childRate : ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
    });
  }

  addAccomodationBaseRate(){
    if(this.addAccomodationRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addAccomodationAddRateConfirmation = this.dialog.open(AddAccomodationAddRateConfirmationComponent);
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
