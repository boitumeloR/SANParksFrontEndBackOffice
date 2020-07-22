import { Component, OnInit, ViewChild} from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAmenityPenaltyConfirmationComponent } from 'src/app/modals/amenity-penalty/update-amenity-penalty-confirmation/update-amenity-penalty-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-update-amenity-penalty',
  templateUrl: './update-amenity-penalty.component.html',
  styleUrls: ['./update-amenity-penalty.component.scss']
})
export class UpdateAmenityPenaltyComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  selectAmenity: FormGroup;
  amenityPenalty: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateAmenityPenaltyComponent>) { }

  ngOnInit(): void {
    this.selectAmenity = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      unitNumber : ['', Validators.required],
      amenity: ['',Validators.required]
    });
    
    this.amenityPenalty = this.formBuilder.group({
      amenityPenalty: ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
    });
  }

  stepperNext(){
    if(this.selectAmenity.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  updateAmenityPenalty(){
    if(this.amenityPenalty.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const updateAmenityPenaltyConfirmationDialog = this.dialog.open(UpdateAmenityPenaltyConfirmationComponent)
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
