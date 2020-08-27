import { Component, OnInit, ViewChild} from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAmenityPenaltyConfirmationComponent } from 'src/app/modals/amenity-penalty/update-amenity-penalty-confirmation/update-amenity-penalty-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AmenityPenaltyService } from 'src/app/services/AmenityPenalty/amenity-penalty.service';
@Component({
  selector: 'app-update-amenity-penalty',
  templateUrl: './update-amenity-penalty.component.html',
  styleUrls: ['./update-amenity-penalty.component.scss']
})
export class UpdateAmenityPenaltyComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  selectAmenity: FormGroup;
  amenityPenalty: FormGroup;
  amenity;
  startDate;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateAmenityPenaltyComponent>, private amenityPenaltyService: AmenityPenaltyService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.amenity =  JSON.parse(localStorage.getItem('amenityPenalty'));

    this.startDate = new Date(this.amenity.DateEffective);
    this.selectAmenity = this.formBuilder.group({

    });

    this.amenityPenalty = this.formBuilder.group({
      amenityPenalty: [this.amenity.AmenityPenaltyAmount, [Validators.required, Validators.min(1)]],
      dateEffective : [this.startDate, Validators.required]
    });
  }

  stepperNext(){
    if (this.selectAmenity.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  updateAmenityPenalty(){
    if (this.amenityPenalty.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const updateAmenityPenaltyConfirmationDialog = this.dialog.open(UpdateAmenityPenaltyConfirmationComponent);

    updateAmenityPenaltyConfirmationDialog.afterClosed().subscribe( result => {
      if (result === true){
         const updateAmenityPenalty = {
          PenaltyID: this.amenity.AmenityPenaltyID,
          AmenityPenaltyAmount: this.amenityPenalty.get('amenityPenalty').value,
          DateEffective: this.amenityPenalty.get('dateEffective').value
        };
         this.amenityPenaltyService.updateAmenityPenalty(updateAmenityPenalty, this.globalService.GetServer());
      }
    });
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
