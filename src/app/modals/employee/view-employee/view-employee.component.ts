import { Component, OnInit } from '@angular/core';
import { UpdateEmployeeComponent} from 'src/app/modals/employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent} from 'src/app/modals/employee/delete-employee/delete-employee.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateEmployee(){
    const updateEmployeeDialog = this.dialog.open(UpdateEmployeeComponent,{disableClose: true})
  }

  deleteEmployee(){
    const deleteEmployeeDialog = this.dialog.open(DeleteEmployeeComponent);
  }
}
