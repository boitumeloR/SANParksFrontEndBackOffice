import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateEmployeeSuccessfulComponent} from 'src/app/modals/employee/update-employee-successful/update-employee-successful.component';
import {UpdateEmployeeUnsuccessfulComponent} from 'src/app/modals/employee/update-employee-unsuccessful/update-employee-unsuccessful.component';

@Component({
  selector: 'app-update-employee-confirmation',
  templateUrl: './update-employee-confirmation.component.html',
  styleUrls: ['./update-employee-confirmation.component.scss']
})
export class UpdateEmployeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateEmployee(){
    const updateEmployeeSuccessfulDialog = this.dialog.open(UpdateEmployeeSuccessfulComponent);
  }

  unsuccessfulUpdateEmployee(){
    const updateEmployeeUnsuccessfulDialog = this.dialog.open(UpdateEmployeeUnsuccessfulComponent);
  }
}
