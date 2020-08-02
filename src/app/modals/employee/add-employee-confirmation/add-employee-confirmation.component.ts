import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddEmployeeSuccessfulComponent} from 'src/app/modals/employee/add-employee-successful/add-employee-successful.component';
import {AddEmployeeUnsuccessfulComponent} from 'src/app/modals/employee/add-employee-unsuccessful/add-employee-unsuccessful.component';

@Component({
  selector: 'app-add-employee-confirmation',
  templateUrl: './add-employee-confirmation.component.html',
  styleUrls: ['./add-employee-confirmation.component.scss']
})
export class AddEmployeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddEmployee(){
    const addEmployeeSuccessfulDialog = this.dialog.open(AddEmployeeSuccessfulComponent);
  }

  unsuccessfulAddEmployee(){
    const addEmployeeUnsuccessfulDialog = this.dialog.open(AddEmployeeUnsuccessfulComponent);
  }
} 
