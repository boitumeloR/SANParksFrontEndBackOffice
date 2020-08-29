import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddEmployeeComponent } from 'src/app/modals/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from 'src/app/modals/employee/view-employee/view-employee.component';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private dialog: MatDialog, private employeeService: EmployeeService, private globalService: GlobalService) { }

  displayedColumns: string[] = ['park', 'employeeName', 'identityNumber', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.employeeService.requestReferesh.subscribe(() => {this.getEmployee(); });
    this.getEmployee();
  }

  addEmployee(){
    const addEmployeeDialog =  this.dialog.open(AddEmployeeComponent, {disableClose: true});
  }

  viewEmployee(employee){
    localStorage.setItem('employee', JSON.stringify(employee));
    const viewEmployeeDialog =  this.dialog.open(ViewEmployeeComponent);
  }

  getEmployee(){
    this.employeeService.ReadEmployee(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = result.Employees;
      this.dataSource.paginator = this.paginator;
    });
  }
}
