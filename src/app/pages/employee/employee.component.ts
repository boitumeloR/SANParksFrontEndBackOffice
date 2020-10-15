import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddEmployeeComponent } from 'src/app/modals/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from 'src/app/modals/employee/view-employee/view-employee.component';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private dialog: MatDialog, private router: Router,
              private employeeService: EmployeeService, private globalService: GlobalService,
              private snackbar: MatSnackBar, private title: Title) { }

  displayedColumns: string[] = ['park', 'employeeName', 'identityNumber', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.title.setTitle('Employee');
    this.employeeService.requestReferesh.subscribe(() => {this.getEmployee(); });
    this.getEmployee();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addEmployee(){
    const addEmployeeDialog =  this.dialog.open(AddEmployeeComponent, {disableClose: true});
  }

  viewEmployee(employee){
    localStorage.setItem('employee', JSON.stringify(employee));
    const viewEmployeeDialog =  this.dialog.open(ViewEmployeeComponent);
  }

  getEmployee(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    const user = JSON.parse(localStorage.getItem('user'));

    const employee = {
        SessionID: user.SessionID,
        UserSecret: user.UserSecret
    };

    this.employeeService.ReadEmployee(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Employees);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    }
    );
  }
}
