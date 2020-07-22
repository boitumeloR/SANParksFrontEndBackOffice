import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-confirmation/update-park-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-park-gate-time',
  templateUrl: './update-park-gate-time.component.html',
  styleUrls: ['./update-park-gate-time.component.scss']
})
export class UpdateParkGateTimeComponent implements OnInit {
  updateParkGateTimeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateParkGateTimeComponent>) { }

  ngOnInit(): void {
    this.updateParkGateTimeForm = this.formBuilder.group({
      park: ['', Validators.required],
      parkGate : ['', Validators.required],
      season : ['', Validators.required],
      gateOpeningTime : ['', Validators.required],
      gateClosingTime: ['', Validators.required]
    });
  }

  updateParkGateTime(){
    if(this.updateParkGateTimeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
    const confirmUpdateDialog =  this.dialog.open(UpdateParkGateTimeConfirmationComponent)
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
