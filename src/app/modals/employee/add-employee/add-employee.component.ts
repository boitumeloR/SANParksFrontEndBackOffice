import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddEmployeeConfirmationComponent} from 'src/app/modals/employee/add-employee-confirmation/add-employee-confirmation.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeRole: FormGroup;
  basicEmployeeDetails: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addEmployee(){
    const addEmployeeConfirmationDialog = this.dialog.open(AddEmployeeConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
