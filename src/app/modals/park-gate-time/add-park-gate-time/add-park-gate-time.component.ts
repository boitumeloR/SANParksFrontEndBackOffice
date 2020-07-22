import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-confirmation/add-park-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-park-gate-time',
  templateUrl: './add-park-gate-time.component.html',
  styleUrls: ['./add-park-gate-time.component.scss']
})
export class AddParkGateTimeComponent implements OnInit {
  addParkGateTimeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddParkGateTimeComponent>) { }

  ngOnInit(): void {
    this.addParkGateTimeForm = this.formBuilder.group({
      park: ['', Validators.required],
      parkGate : ['', Validators.required],
      season : ['', Validators.required],
      gateOpeningTime : ['', Validators.required],
      gateClosingTime: ['', Validators.required]
    });
  }

  addParkGateTime(){
    if(this.addParkGateTimeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addParkGateTimeConfirmationDialog = this.dialog.open(AddParkGateTimeConfirmationComponent);
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
