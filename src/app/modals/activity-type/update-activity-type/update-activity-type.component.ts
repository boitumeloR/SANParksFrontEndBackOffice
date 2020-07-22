import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivityTypeConfirmationComponent } from 'src/app/modals/activity-type/update-activity-type-confirmation/update-activity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-activity-type',
  templateUrl: './update-activity-type.component.html',
  styleUrls: ['./update-activity-type.component.scss']
})
export class UpdateActivityTypeComponent implements OnInit {
  updateActivityTypes: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateActivityTypeComponent>) { }

  ngOnInit(): void {
    this.updateActivityTypes = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  updateActivityType(){
    if(this.updateActivityTypes.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateActivityTypeConfirmationDialog = this.dialog.open(UpdateActivityTypeConfirmationComponent)
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
