import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddActivityRateConfirmationComponent} from 'src/app/modals/activity-rate/add-activity-rate-confirmation/add-activity-rate-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityTypeService } from 'src/app/services/ActivityType/activity-type.service';
import { CampService } from 'src/app/services/Camp/camp.service';
import { ActivityService } from 'src/app/services/Activity/activity.service';
import { ActivitySlotService } from 'src/app/services/ActivitySlot/activity-slot.service';
import { ActivityRateService } from 'src/app/services/ActivityRate/activity-rate.service';
@Component({
  selector: 'app-add-activity-rate',
  templateUrl: './add-activity-rate.component.html',
  styleUrls: ['./add-activity-rate.component.scss']
})
export class AddActivityRateComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  selectActivityForm: FormGroup;
  activityRateDetails: FormGroup;
  parkDropDown;
  campDropDown;
  activityTypeDropDown;
  campSelected;
  activityDropDown;
  rateTypeDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddActivityRateComponent>, private parkService: ParkService,
              private globalService: GlobalService, private activityTypeService: ActivityTypeService, private campService: CampService,
              private activityService: ActivityService, private activityRateService: ActivityRateService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
    });

    this.activityTypeService.readActivityType(this.globalService.GetServer()).subscribe((result: any) => {
      this.activityTypeDropDown = result.ActivityTypes;
    });

    this.activityRateService.readRateTypes(this.globalService.GetServer()).subscribe((result: any) => {
      this.rateTypeDropDown = result.ListOfRateTypes;
    });

    this.selectActivityForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      activityType : ['', Validators.required],
      activity : ['', Validators.required]
    });

    this.activityRateDetails = this.formBuilder.group({
      rateType: ['', Validators.required],
      adultRate : ['', [Validators.required, Validators.min(0)]],
      childRate : ['', [Validators.required, Validators.min(0)]],
      vehicleAmount : ['', [Validators.required, Validators.min(0)]],
      hutAmount : ['', [Validators.required, Validators.min(0)]],
      personAmount : ['', [Validators.required, Validators.min(0)]],
      bikeAmount : ['', [Validators.required, Validators.min(0)]],
      noBikeAmunt : ['', [Validators.required, Validators.min(0)]]
      // dateEffective : ['', Validators.required]

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
  addActivityRate(){
    if (this.activityRateDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const addActivityRateConfirmationDialog = this.dialog.open(AddActivityRateConfirmationComponent);

    addActivityRateConfirmationDialog.afterClosed().subscribe( result => {
      if (result === true){
         const newActivityRate = {
          AdultRateAmount: this.activityRateDetails.get('adultRate').value,
          ChildRateAmount: this.activityRateDetails.get('childRate').value,
          VehicleAmount: this.activityRateDetails.get('vehicleAmount').value,
          HutAmount: this.activityRateDetails.get('hutAmount').value,
          PersonAmount: this.activityRateDetails.get('personAmount').value,
          BikeAmount: this.activityRateDetails.get('bikeAmount').value,
          NoBikeAmount: this.activityRateDetails.get('noBikeAmunt').value,
          RateTypeID: this.activityRateDetails.get('rateType').value,
          ActivityID: this.selectActivityForm.get('activity').value,
          CampID: this.selectActivityForm.get('camp').value
        };
         this.activityRateService.createActivityRate(newActivityRate, this.globalService.GetServer());
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

  getCampsForPark(parkID){
    this.campService.getCampsForSpecificPark(parkID, this.globalService.GetServer()).subscribe((result: any) => {
      this.campDropDown = result.Camps;
    });
  }

  updateCampID(campID){
    this.campSelected = campID;
  }

  getActivityInCampForSpecificType(activityTypeID){
    this.activityService.getActivtyInSpecificCamp(this.campSelected, activityTypeID, this.globalService.GetServer()).
    subscribe((result: any) => {
      this.activityDropDown = result.ListOfActivities;
    });
  }
}
