import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivitySlotConfirmationComponent} from 'src/app/modals/activity-slot/update-activity-slot-confirmation/update-activity-slot-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { ActivitySlotService } from 'src/app/services/ActivitySlot/activity-slot.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-update-activity-slot',
  templateUrl: './update-activity-slot.component.html',
  styleUrls: ['./update-activity-slot.component.scss']
})
export class UpdateActivitySlotComponent implements OnInit {
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

  updateActivitySlots: FormGroup;
  actvivitySlot;
  startDate;
  endDate;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateActivitySlotComponent>, private activitySlotService: ActivitySlotService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.actvivitySlot = JSON.parse(localStorage.getItem('activitySlot'));

    this.startDate = new Date(this.actvivitySlot.StartDate);
    this.endDate = new Date(this.actvivitySlot.EndDate);

    this.updateActivitySlots = this.formBuilder.group({
      slotTime: [this.actvivitySlot.SlotTime, Validators.required],
      startDate : [this.startDate, Validators.required],
      endDate: [this.endDate, Validators.required]
    });
  }

  updateActivitySlot(){
    if (this.updateActivitySlots.invalid){
      this.displayValidationError();
    }
    else if (this.updateActivitySlots.get('endDate').value < this.updateActivitySlots.get('startDate').value){
      this.displayDateError();
    }
    else{
      this.dialogRef.close();
      const updateActivitySlotConfirmationDialog = this.dialog.open(UpdateActivitySlotConfirmationComponent);

      updateActivitySlotConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const activitySlot = {
            ActivitySlotID: this.actvivitySlot.ActivitySlotID,
            SlotTime: this.updateActivitySlots.get('slotTime').value,
            startDate: this.updateActivitySlots.get('startDate').value,
            endDate: this.updateActivitySlots.get('endDate').value,
            authenticateUser: user
          };

          this.activitySlotService.UpdateActivitySlot(activitySlot, this.globalService.GetServer());
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

  displayDateError() {
    this.validationErrorSnackBar.open('The date effective must be earlier or equal than the end date. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
