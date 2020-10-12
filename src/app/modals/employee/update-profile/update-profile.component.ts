import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateEmployeeConfirmationComponent } from '../update-employee-confirmation/update-employee-confirmation.component';
import { CancelAlertComponent } from '../../auxilliary-modals/cancel-alert/cancel-alert.component';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private globalService: GlobalService,
              private validationErrorSnackBar: MatSnackBar, private dialogRef: MatDialogRef<UpdateProfileComponent>,
              private dialog: MatDialog) { }
  basicEmployeeDetails: FormGroup;
  employee;
  titleDropDown;

  ngOnInit(): void {
    this.employee = JSON.parse(localStorage.getItem('loggedEmployee'));
    this.basicEmployeeDetails = this.formBuilder.group({
      title: [this.employee.TitleID, Validators.required],
      name: [this.employee.EmployeeName, Validators.required],
      surname : [this.employee.EmployeeSurname, Validators.required],
      identityNumber : [this.employee.EmployeeIDNumber, Validators.required],
      cellphoneNumber : [this.employee.EmployeeCellphone, Validators.required],
      workNumber : [this.employee.EmployeeWorkPhone, Validators.required],
      emailAddress : [this.employee.EmployeeEmail, [Validators.required, Validators.email]],
      addressLine1 : [this.employee.EmployeeAddressLine1, Validators.required],
      addressLine2 : [this.employee.EmployeeAddressLine2, Validators.required],
      postalCode : [this.employee.EmployeePostalCode, Validators.required]
    });

    this.employeeService.ReadTitles(this.globalService.GetServer()).subscribe((result: any) => {
      this.titleDropDown = result.ListOfTitles;
    });
  }

  updateEmployee(){
    const  numbers = /^[0-9]+$/;
    if (this.employee.invalid){
      this.displayValidationError();
    }
    else if (this.basicEmployeeDetails.invalid){
      this.displayValidationError();
    }
    else if (this.basicEmployeeDetails.get('cellphoneNumber').value.match(numbers) &&
              this.basicEmployeeDetails.get('workNumber').value.match(numbers)){
      this.dialogRef.close();
      const updateEmployeeConfirmationDialog = this.dialog.open(UpdateEmployeeConfirmationComponent);

      updateEmployeeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const newEmployee = {
            EmployeeID : this.employee.EmployeeID,
            TitleID: this.basicEmployeeDetails.get('title').value,
            EmployeeName: this.basicEmployeeDetails.get('name').value,
            EmployeeSurname: this.basicEmployeeDetails.get('surname').value,
            EmployeeEmail: this.basicEmployeeDetails.get('emailAddress').value,
            EmployeeIDNumber: this.basicEmployeeDetails.get('identityNumber').value,
            EmployeeCellPhone: this.basicEmployeeDetails.get('cellphoneNumber').value,
            EmployeeWorkPhone: this.basicEmployeeDetails.get('workNumber').value,
            EmployeeAddressLine1: this.basicEmployeeDetails.get('addressLine1').value,
            EmployeeAddressLine2: this.basicEmployeeDetails.get('addressLine2').value,
            EmployeePostalCode: this.basicEmployeeDetails.get('postalCode').value,
            authenticateUser: user
          };

          this.employeeService.updateProfile(newEmployee, this.globalService.GetServer());
        }
      });
    }
    else{
      this.displayValidationForCellAndWork();
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

  displayPasswordError(){
    this.validationErrorSnackBar.open('Password confirmation doesn\'t match the password.', 'OK', {
      duration: 3500,
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }

  displayValidationForCellAndWork() {
    this.validationErrorSnackBar.open('The cellphone or work number details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}

