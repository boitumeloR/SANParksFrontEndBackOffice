import { Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivityConfirmationComponent} from 'src/app/modals/activity/update-activity-confirmation/update-activity-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.scss']
})
export class UpdateActivityComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicActivityDetails: FormGroup;
  campsAvailableAt: FormGroup;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateActivityComponent>) { }

  ngOnInit(): void {
    this.basicActivityDetails = this.formBuilder.group({
      activityType: ['', Validators.required],
      activityDescription : ['', Validators.required],
      maximumCapacity : ['', [Validators.required, Validators.min(1)]],
      minimumAge : ['', [Validators.required, Validators.min(1)]],
      maximumAge : ['', [Validators.required, Validators.min(1)]]
    });
  }

  stepperNext(){
    if(this.basicActivityDetails.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }
  updateActivity(){
    const updateActivityConfirmationDialog = this.dialog.open(UpdateActivityConfirmationComponent);
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
