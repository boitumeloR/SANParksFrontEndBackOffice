import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivitySlotConfirmationComponent} from 'src/app/modals/activity-slot/update-activity-slot-confirmation/update-activity-slot-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

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
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateActivitySlotComponent>) { }

  ngOnInit(): void {
    this.updateActivitySlots = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      activityType : ['', Validators.required],
      activity : ['', Validators.required],
      slotTime: ['', Validators.required],
      startDate : ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  updateActivitySlot(){
    if(this.updateActivitySlots.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateActivitySlotConfirmationDialog = this.dialog.open(UpdateActivitySlotConfirmationComponent);
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
