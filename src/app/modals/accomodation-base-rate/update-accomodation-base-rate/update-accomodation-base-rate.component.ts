import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAccomodationBaseRateConfirmationComponent } from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate-confirmation/update-accomodation-base-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-accomodation-base-rate',
  templateUrl: './update-accomodation-base-rate.component.html',
  styleUrls: ['./update-accomodation-base-rate.component.scss']
})
export class UpdateAccomodationBaseRateComponent implements OnInit {
      updateAccomodationBaseRateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
      private dialogRef: MatDialogRef<UpdateAccomodationBaseRateComponent>) { }

  ngOnInit(): void {
    this.updateAccomodationBaseRateForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      baseRate : ['', [Validators.required, Validators.min(1)]]
    });
  }

  updateAccomodationBaseRate(){
    if(this.updateAccomodationBaseRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateAccomodationBaseRateConfirmation = this.dialog.open(UpdateAccomodationBaseRateConfirmationComponent);
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
