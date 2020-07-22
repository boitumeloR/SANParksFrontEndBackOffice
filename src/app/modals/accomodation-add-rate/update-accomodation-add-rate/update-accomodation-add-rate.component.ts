import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAccomodationAddRateConfirmationComponent } from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-confirmation/update-accomodation-add-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-accomodation-add-rate',
  templateUrl: './update-accomodation-add-rate.component.html',
  styleUrls: ['./update-accomodation-add-rate.component.scss']
})
export class UpdateAccomodationAddRateComponent implements OnInit {
  updateAccomodationRateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateAccomodationAddRateComponent>) { }

  ngOnInit(): void {
    this.updateAccomodationRateForm = this.formBuilder.group({
      accomodationType: ['', Validators.required],
      adultRate : ['', [Validators.required, Validators.min(1)]],
      childRate : ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
    });
  }

  updateAccomodationAddRate(){
  if(this.updateAccomodationRateForm.invalid){
    this.displayValidationError();
  }
  else{
    this.dialogRef.close();
    const updateAccomodationAddRateConfirmation = this.dialog.open(UpdateAccomodationAddRateConfirmationComponent);
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
