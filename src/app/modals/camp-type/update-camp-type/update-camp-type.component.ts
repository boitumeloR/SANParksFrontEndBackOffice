import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateCampTypeConfirmationComponent} from 'src/app/modals/camp-type/update-camp-type-confirmation/update-camp-type-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-camp-type',
  templateUrl: './update-camp-type.component.html',
  styleUrls: ['./update-camp-type.component.scss']
})
export class UpdateCampTypeComponent implements OnInit {
  updateCampTypeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateCampTypeComponent>) { }

  ngOnInit(): void {
    this.updateCampTypeForm = this.formBuilder.group({
      campTypeName: ['', Validators.required],
      campTypeDescription : ['', Validators.required]
    });
  }
  
  updateCampType(){
    if(this.updateCampTypeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
    const UpdateCampTypeConfirmation = this.dialog.open(UpdateCampTypeConfirmationComponent);
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
