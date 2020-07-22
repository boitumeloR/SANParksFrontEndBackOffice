import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateEmployeeConfirmationComponent} from 'src/app/modals/employee/update-employee-confirmation/update-employee-confirmation.component';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicEmployeeDetails: FormGroup;
  employeeRole: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateEmployeeComponent>) { }

  ngOnInit(): void {
    this.basicEmployeeDetails = this.formBuilder.group({
      name: ['', Validators.required],
      surname : ['', Validators.required],
      identityNumber : ['', Validators.required],
      cellphoneNumber : ['', Validators.required],
      workNumber : ['', Validators.required],
      emailAddress : ['', [Validators.required, Validators.email]],
      addressLine1 : ['', Validators.required],
      addressLine2 : ['', Validators.required],
      postalCode : ['', Validators.required]
    });

    this.employeeRole = this.formBuilder.group({
      park: ['', Validators.required],
      userRole : ['', Validators.required],
      employmentStatus : ['', Validators.required]
    });
  }

  stepperNext(){
    if(this.basicEmployeeDetails.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  updateEmployee(){
    if(this.employeeRole.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateEmployeeConfirmationDialog = this.dialog.open(UpdateEmployeeConfirmationComponent);
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