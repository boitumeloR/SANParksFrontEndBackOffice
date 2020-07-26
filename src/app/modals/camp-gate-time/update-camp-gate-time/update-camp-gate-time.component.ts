import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateCampGateTimeConfirmationComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-confirmation/update-camp-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';

@Component({
  selector: 'app-update-camp-gate-time',
  templateUrl: './update-camp-gate-time.component.html',
  styleUrls: ['./update-camp-gate-time.component.scss']
})
export class UpdateCampGateTimeComponent implements OnInit {
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
  updateCampGateTimeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateCampGateTimeComponent>) { }

  ngOnInit(): void {
    this.updateCampGateTimeForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      season : ['', Validators.required],
      openTime : ['', Validators.required],
      closeTime: ['',Validators.required]
    });
  }

  updateCampGateTime(){
    if(this.updateCampGateTimeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateCampGateTimeConfirmationDialog = this.dialog.open(UpdateCampGateTimeConfirmationComponent)
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
