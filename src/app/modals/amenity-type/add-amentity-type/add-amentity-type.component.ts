import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAmentityTypeConfirmationComponent} from 'src/app/modals/amenity-type/add-amentity-type-confirmation/add-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-amentity-type',
  templateUrl: './add-amentity-type.component.html',
  styleUrls: ['./add-amentity-type.component.scss']
})
export class AddAmentityTypeComponent implements OnInit {
  addAmenityTypeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAmentityTypeComponent>) { }

  ngOnInit(): void {
    this.addAmenityTypeForm = this.formBuilder.group({
      amenityTypeName: ['', Validators.required]
    });
  }

  addAmenityType(){
    if(this.addAmenityTypeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addCampDialog = this.dialog.open(AddAmentityTypeConfirmationComponent)
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
