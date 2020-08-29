import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddEmployeeConfirmationComponent} from 'src/app/modals/employee/add-employee-confirmation/add-employee-confirmation.component';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { UserRoleService } from 'src/app/services/UserRole/user-role.service';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  employeeRole: FormGroup;
  basicEmployeeDetails: FormGroup;
  parkDropDown;
  userRoleDropDown;
  employmentStatusDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddEmployeeComponent>, private parkService: ParkService,
              private userRoleService: UserRoleService, private employeeService: EmployeeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
    });

    this.userRoleService.ReadUserRole(this.globalService.GetServer()).subscribe((result: any) => {
      this.userRoleDropDown = result.UserRoles;
    });

    this.employeeService.ReadEmploymentStatus(this.globalService.GetServer()).subscribe((result: any) => {
      this.employmentStatusDropDown = result.ListOfEmploymentStatus;
    });

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
    if (this.basicEmployeeDetails.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  addEmployee(){
    if (this.employeeRole.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addEmployeeConfirmationDialog = this.dialog.open(AddEmployeeConfirmationComponent);

      addEmployeeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const newEmployee = {
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
            EmploymentStatusID: this.employeeRole.get('employmentStatus').value
          };

          this.employeeService.CreateEmployee(newEmployee, this.globalService.GetServer());
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
}
