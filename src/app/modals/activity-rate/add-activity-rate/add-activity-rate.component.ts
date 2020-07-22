import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddActivityRateConfirmationComponent} from 'src/app/modals/activity-rate/add-activity-rate-confirmation/add-activity-rate-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-add-activity-rate',
  templateUrl: './add-activity-rate.component.html',
  styleUrls: ['./add-activity-rate.component.scss']
})
export class AddActivityRateComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  selectActivityForm: FormGroup;
  activityRateDetails: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddActivityRateComponent>) { }

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
  addActivityRate(){
    if(this.activityRateDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const addActivityRateConfirmationDialog = this.dialog.open(AddActivityRateConfirmationComponent);
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
