import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddActivityConfirmationComponent} from 'src/app/modals/activity/add-activity-confirmation/add-activity-confirmation.component'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicActivityDetails: FormGroup;
  campsAvailableAt: FormGroup
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddActivityComponent>) { }

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

  addActivity(){
    const addActivityConfirmationDialog = this.dialog.open(AddActivityConfirmationComponent)
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
