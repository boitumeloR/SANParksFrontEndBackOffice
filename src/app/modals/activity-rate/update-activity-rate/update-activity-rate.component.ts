import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';

import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivityRateConfirmationComponent} from 'src/app/modals/activity-rate/update-activity-rate-confirmation/update-activity-rate-confirmation.component';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityRateService } from 'src/app/services/ActivityRate/activity-rate.service';
@Component({
  selector: 'app-update-activity-rate',
  templateUrl: './update-activity-rate.component.html',
  styleUrls: ['./update-activity-rate.component.scss']
})
export class UpdateActivityRateComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  activityRateDetails: FormGroup;
  selectActivityForm: FormGroup;
  actvivityRate;
  rateTypeDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateActivityRateComponent>, private activityRateService: ActivityRateService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.actvivityRate = JSON.parse(localStorage.getItem('activityRate'));

    this.activityRateService.readRateTypes(this.globalService.GetServer()).subscribe((result: any) => {
      this.rateTypeDropDown = result.ListOfRateTypes;
    });

    this.selectActivityForm = this.formBuilder.group({
    });

    this.activityRateDetails = this.formBuilder.group({
      rateType: [this.actvivityRate.RateTypeID, Validators.required],
      adultRate : [this.actvivityRate.AdultRateAmount, [Validators.required, Validators.min(0)]],
      childRate : [this.actvivityRate.ChildRateAmount, [Validators.required, Validators.min(0)]],
      vehicleAmount : [this.actvivityRate.VehicleAmount, [Validators.required, Validators.min(0)]],
      hutAmount : [this.actvivityRate.HutAmount, [Validators.required, Validators.min(0)]],
      personAmount : [this.actvivityRate.PersonAmount, [Validators.required, Validators.min(0)]],
      bikeAmount : [this.actvivityRate.BikeAmount, [Validators.required, Validators.min(0)]],
      noBikeAmunt : [this.actvivityRate.NoBikeAmount, [Validators.required, Validators.min(0)]],
      // dateEffective : [this.actvivityRate.RateTypeID, Validators.required]

    });
  }

  stepperNext(){
    if (this.selectActivityForm.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  updateActivityRate(){
    if (this.activityRateDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const updateActivityRateConfirmationDialog = this.dialog.open(UpdateActivityRateConfirmationComponent);

    updateActivityRateConfirmationDialog.afterClosed().subscribe( result => {
      if (result === true){
         const updateActivityRate = {
          ActivityRateID: this.actvivityRate.ActivityRateID,
          AdultRateAmount: this.activityRateDetails.get('adultRate').value,
          ChildRateAmount: this.activityRateDetails.get('childRate').value,
          VehicleAmount: this.activityRateDetails.get('vehicleAmount').value,
          HutAmount: this.activityRateDetails.get('hutAmount').value,
          PersonAmount: this.activityRateDetails.get('personAmount').value,
          BikeAmount: this.activityRateDetails.get('bikeAmount').value,
          NoBikeAmount: this.activityRateDetails.get('noBikeAmunt').value,
          RateTypeID: this.activityRateDetails.get('rateType').value
        };
         this.activityRateService.updateActivityRate(updateActivityRate, this.globalService.GetServer());
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
