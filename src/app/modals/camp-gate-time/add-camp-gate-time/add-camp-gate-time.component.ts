import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddCampGateTimeConfirmationComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-confirmation/add-camp-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-camp-gate-time',
  templateUrl: './add-camp-gate-time.component.html',
  styleUrls: ['./add-camp-gate-time.component.scss']
})
export class AddCampGateTimeComponent implements OnInit {
  addCampGateTimeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddCampGateTimeComponent>) { }

  ngOnInit(): void {
    this.addCampGateTimeForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      season : ['', Validators.required],
      openTime : ['', Validators.required],
      closeTime: ['',Validators.required]
    });
  }

  addCampGateTime(){
    if(this.addCampGateTimeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addCampGateTimeConfirmation = this.dialog.open(AddCampGateTimeConfirmationComponent);
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
