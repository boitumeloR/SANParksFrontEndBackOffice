import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {UpdateEmployeeConfirmationComponent} from 'src/app/modals/employee/update-employee-confirmation/update-employee-confirmation.component';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  basicEmployeeDetails: FormGroup;
  employeeRole: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    const updateEmployeeConfirmationDialog = this.dialog.open(UpdateEmployeeConfirmationComponent);
  }
}
