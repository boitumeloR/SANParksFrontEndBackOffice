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
  dateEffective;
  listOfYears = [];
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateActivityRateComponent>, private activityRateService: ActivityRateService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    let year = new Date().getFullYear();
    const limitYear = year + 4;
    while (year <= limitYear){
      this.listOfYears.push(year);
      year += 1;
     }

    this.actvivityRate = JSON.parse(localStorage.getItem('activityRate'));

    this.activityRateService.readRateTypes(this.globalService.GetServer()).subscribe((result: any) => {
      this.rateTypeDropDown = result.ListOfRateTypes;
    });

    this.selectActivityForm = this.formBuilder.group({
    });

    this.activityRateDetails = this.formBuilder.group({
      rateType: [this.actvivityRate.RateTypeID, Validators.required],
      personAmount : [this.actvivityRate.PersonAmount, [Validators.required, Validators.min(0)]],
      dateEffective : [this.actvivityRate.yearActive, Validators.required]
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
         const user = JSON.parse(localStorage.getItem('user'));

         const updateActivityRate = {
          ActivityRateID: this.actvivityRate.ActivityRateID,
          PersonAmount: this.activityRateDetails.get('personAmount').value,
          RateTypeID: this.activityRateDetails.get('rateType').value,
          DateEffective: this.activityRateDetails.get('dateEffective').value,
          ActivityID: this.actvivityRate.ActivityID,
          CampID: this.actvivityRate.CampID,
          authenticateUser: user
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
