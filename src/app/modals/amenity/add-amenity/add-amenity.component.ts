import { Component, OnInit, ViewChild} from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddAmenityConfirmationComponent } from 'src/app/modals/amenity/add-amenity-confirmation/add-amenity-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-add-amenity',
  templateUrl: './add-amenity.component.html',
  styleUrls: ['./add-amenity.component.scss']
})
export class AddAmenityComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAmenityComponent>) { }

  ngOnInit(): void {
    this.amenityLocation = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      unitNumber : ['', Validators.required]
    });
    
    this.amenityDetails = this.formBuilder.group({
      amenityType: ['', Validators.required],
      amenityDescription : ['', Validators.required],
      amenityStatus : ['', Validators.required]
    });
  }
  
  stepperNext(){
    if(this.amenityLocation.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  addAmenity(){
    if(this.amenityDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const addAmenityConfirmationDialog = this.dialog.open(AddAmenityConfirmationComponent)
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
