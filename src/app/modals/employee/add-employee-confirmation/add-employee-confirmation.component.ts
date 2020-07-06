import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddEmployeeSuccessfulComponent} from 'src/app/modals/employee/add-employee-successful/add-employee-successful.component';


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
    const addDailyConservationFeeSuccessfulDialog = this.dialog.open(AddEmployeeSuccessfulComponent);
  }
} 
