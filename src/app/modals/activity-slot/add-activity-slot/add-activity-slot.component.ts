import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddActivitySlotConfirmationComponent} from 'src/app/modals/activity-slot/add-activity-slot-confirmation/add-activity-slot-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

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
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddActivitySlotComponent>) { }

  ngOnInit(): void {
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
    if(this.addActivitySlot.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
    const addSlotTimeConfirmationDialog = this.dialog.open(AddActivitySlotConfirmationComponent);
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
