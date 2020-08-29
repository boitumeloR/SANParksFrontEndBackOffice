import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddActivitySlotConfirmationComponent} from 'src/app/modals/activity-slot/add-activity-slot-confirmation/add-activity-slot-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityType, ActivityTypeService } from 'src/app/services/ActivityType/activity-type.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { CampService } from 'src/app/services/Camp/camp.service';
import { ActivityService } from 'src/app/services/Activity/activity.service';
import { ActivitySlotService } from 'src/app/services/ActivitySlot/activity-slot.service';

@Component({
  selector: 'app-add-activity-slot',
  templateUrl: './add-activity-slot.component.html',
  styleUrls: ['./add-activity-slot.component.scss']
})
export class AddActivitySlotComponent implements OnInit {
    clockTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#fff',
        buttonColor: '#388e3c'
    },
    dial: {
        dialBackgroundColor: '#388e3c',
    },
    clockFace: {
        clockFaceBackgroundColor: '#fff',
        clockHandColor: '#388e3c',
        clockFaceTimeInactiveColor: '#388e3c'
    }
  };
  addActivitySlot: FormGroup;
  parkDropDown;
  campDropDown;
  activityTypeDropDown;
  campSelected;
  activityDropDown;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddActivitySlotComponent>, private parkService: ParkService,
              private globalService: GlobalService, private activityTypeService: ActivityTypeService, private campService: CampService,
              private activityService: ActivityService, private activitySlotService: ActivitySlotService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
    });

    this.activityTypeService.readActivityType(this.globalService.GetServer()).subscribe((result: any) => {
      this.activityTypeDropDown = result.ActivityTypes;
    });

    this.addActivitySlot = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      activityType : ['', Validators.required],
      activity : ['', Validators.required],
      slotTime: ['', Validators.required],
      startDate : ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  addSlotTime(){
    if (this.addActivitySlot.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addSlotTimeConfirmationDialog = this.dialog.open(AddActivitySlotConfirmationComponent);

      addSlotTimeConfirmationDialog.afterClosed().subscribe( result => {
        if (result === true){
           const newActivitySlot = {
            ActivityID: this.addActivitySlot.get('activity').value,
            CampID: this.addActivitySlot.get('camp').value,
            SlotTime: this.addActivitySlot.get('slotTime').value,
            startDate: this.addActivitySlot.get('startDate').value,
            endDate: this.addActivitySlot.get('endDate').value
          };
           this.activitySlotService.CreateActivitySlot(newActivitySlot, this.globalService.GetServer());
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

