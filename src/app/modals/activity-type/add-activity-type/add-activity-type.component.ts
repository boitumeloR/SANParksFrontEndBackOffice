import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddActivityTypeConfirmationComponent} from 'src/app/modals/activity-type/add-activity-type-confirmation/add-activity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-activity-type',
  templateUrl: './add-activity-type.component.html',
  styleUrls: ['./add-activity-type.component.scss']
})
export class AddActivityTypeComponent implements OnInit {
  addActivityTypes: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddActivityTypeComponent>) { }

  ngOnInit(): void {
    this.addActivityTypes = this.formBuilder.group({
      description: ['', Validators.required],
    });
  }

  addActivityType(){
    if(this.addActivityTypes.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addActivityTypeConfirmationDialog = this.dialog.open(AddActivityTypeConfirmationComponent)
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
