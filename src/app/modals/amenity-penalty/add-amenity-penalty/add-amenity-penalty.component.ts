import { Component, OnInit, ViewChild} from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddAmenityPenaltyConfirmationComponent } from 'src/app/modals/amenity-penalty/add-amenity-penalty-confirmation/add-amenity-penalty-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-add-amenity-penalty',
  templateUrl: './add-amenity-penalty.component.html',
  styleUrls: ['./add-amenity-penalty.component.scss']
})
export class AddAmenityPenaltyComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAmenityPenaltyComponent>) { }

  ngOnInit(): void {
    this.amenityLocation = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      unitNumber : ['', Validators.required],
      amenity: ['',Validators.required]
    });
    
    this.amenityDetails = this.formBuilder.group({
      amenityPenalty: ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
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

  addAmenityPenalty(){
    if(this.amenityDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const addAmenityPenaltyConfirmationDialog = this.dialog.open(AddAmenityPenaltyConfirmationComponent)
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

