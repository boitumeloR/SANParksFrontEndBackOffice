import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateEmployeeConfirmationComponent} from 'src/app/modals/employee/update-employee-confirmation/update-employee-confirmation.component';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ParkService } from 'src/app/services/Park/park.service';
import { UserRoleService } from 'src/app/services/UserRole/user-role.service';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  basicEmployeeDetails: FormGroup;
  employeeRole: FormGroup;
  parkDropDown;
  userRoleDropDown;
  employmentStatusDropDown;
  employee;
  titleDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateEmployeeComponent>, private parkService: ParkService,
              private userRoleService: UserRoleService, private employeeService: EmployeeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.employee = JSON.parse(localStorage.getItem('employee'));

    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));

      this.userRoleService.ReadUserRole(this.globalService.GetServer()).subscribe((resultUserRole: any) => {
        this.userRoleDropDown = resultUserRole.UserRoles;
        localStorage.setItem('user', JSON.stringify(resultUserRole.user));
      });
    });

    this.employeeService.ReadEmploymentStatus(this.globalService.GetServer()).subscribe((result: any) => {
      this.employmentStatusDropDown = result.ListOfEmploymentStatus;
    });

    this.employeeService.ReadTitles(this.globalService.GetServer()).subscribe((result: any) => {
      this.titleDropDown = result.ListOfTitles;
    });

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

    this.employeeRole = this.formBuilder.group({
      park: [this.employee.ParkID, Validators.required],
      userRole : [this.employee.RoleID, Validators.required],
      employmentStatus : [this.employee.EmploymentStatusID, Validators.required]
    });
  }

  stepperNext(){
    if (this.basicEmployeeDetails.invalid){
      this.displayValidationError();
    }
    else{
      const numbers = /^[0-9]+$/;
      if (this.basicEmployeeDetails.get('cellphoneNumber').value.match(numbers) &&
            this.basicEmployeeDetails.get('workNumber').value.match(numbers)){
            this.myStepper.next();
      }
      else{
        this.displayValidationForCellAndWork();
      }
    }
  }

  updateEmployee(){
    if (this.employeeRole.invalid){
      this.displayValidationError();
    }
    else{
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
            UserRoleID: this.employeeRole.get('userRole').value,
            ParkID: this.employeeRole.get('park').value,
            EmploymentStatusID: this.employeeRole.get('employmentStatus').value,
            authenticateUser: user
          };

          this.employeeService.UpdateEmployee(newEmployee, this.globalService.GetServer());
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

  displayValidationForCellAndWork() {
    this.validationErrorSnackBar.open('The cellphone or work number details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
