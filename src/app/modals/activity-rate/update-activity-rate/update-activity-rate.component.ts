import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivityRateConfirmationComponent} from 'src/app/modals/activity-rate/update-activity-rate-confirmation/update-activity-rate-confirmation.component';
@Component({
  selector: 'app-update-activity-rate',
  templateUrl: './update-activity-rate.component.html',
  styleUrls: ['./update-activity-rate.component.scss']
})
export class UpdateActivityRateComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  activityRateDetails: FormGroup;
  selectActivityForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateActivityRateComponent>) { }

  ngOnInit(): void {
    this.selectActivityForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      activityType : ['', Validators.required],
      activity : ['', Validators.required]
    });

    this.activityRateDetails = this.formBuilder.group({
      rateType: ['', Validators.required],
      adultRate : ['', [Validators.required, Validators.min(0)]],
      childRate : ['', [Validators.required, Validators.min(0)]],
      vehicleAmount : ['', [Validators.required, Validators.min(0)]],
      hutAmount : ['', [Validators.required, Validators.min(0)]],
      personAmount : ['', [Validators.required, Validators.min(0)]],
      bikeAmount : ['', [Validators.required, Validators.min(0)]],
      noBikeAmunt : ['', [Validators.required, Validators.min(0)]],
      dateEffective : ['', Validators.required]

    });
  }

  stepperNext(){
    if(this.selectActivityForm.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  updateActivityRate(){
    if(this.activityRateDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const updateActivityRateConfirmationDialog = this.dialog.open(UpdateActivityRateConfirmationComponent);
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
