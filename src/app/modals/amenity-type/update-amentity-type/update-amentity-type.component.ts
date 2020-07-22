import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateAmentityTypeConfirmationComponent} from 'src/app/modals/amenity-type/update-amentity-type-confirmation/update-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-amentity-type',
  templateUrl: './update-amentity-type.component.html',
  styleUrls: ['./update-amentity-type.component.scss']
})
export class UpdateAmentityTypeComponent implements OnInit {
  updateAmenityTypeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateAmentityTypeComponent>) { }

  ngOnInit(): void {
    this.updateAmenityTypeForm = this.formBuilder.group({
      amenityTypeName: ['', Validators.required]
    });
  }

  updateAmenityType(){
    if(this.updateAmenityTypeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const udpateAmenityTypeConfirmationDialog = this.dialog.open(UpdateAmentityTypeConfirmationComponent)
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
