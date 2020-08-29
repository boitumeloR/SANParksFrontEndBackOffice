import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AddEmployeeSuccessfulComponent} from 'src/app/modals/employee/add-employee-successful/add-employee-successful.component';
import {AddEmployeeUnsuccessfulComponent} from 'src/app/modals/employee/add-employee-unsuccessful/add-employee-unsuccessful.component';
import {UpdateEmployeeSuccessfulComponent} from 'src/app/modals/employee/update-employee-successful/update-employee-successful.component';
import {UpdateEmployeeUnsuccessfulComponent} from 'src/app/modals/employee/update-employee-unsuccessful/update-employee-unsuccessful.component';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
export interface Employee {
  EmployeeID: number;
  EmployeeStatusID: number;
  ParkID: number;
  UserRoleID: number;
  EmployeeName: string;
  EmployeeSurname: string;
  EmployeeCellPhone: string;
  EmployeeWorkPhone: string;
  EmployeeEmail: string;
  EmployeeAddressLine1: string;
  EmployeeAddressLine2: string;
  EmployeePostalCode: string;
  EmployeeIDNumber: string;
  Password: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateEmployee(Employee, link){
    this.http.post(`${link}/api/employee/createEmployee`, Employee).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addEmployeeUnsuccessfulDialog = this.dialog.open(AddEmployeeUnsuccessfulComponent);
      }
      else{
        const addEmployeeSuccessfulDialog = this.dialog.open(AddEmployeeSuccessfulComponent);
      }
    });
  }

  ReadEmployee(link){
    return this.http.get(`${link}/api/employee/getEmployee`);
  }

  UpdateEmployee(Employee, link){
    this.http.post(`${link}/api/employee/updateEmployee`, Employee).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateEmployeeUnsuccessfulDialog = this.dialog.open(UpdateEmployeeUnsuccessfulComponent);
      }
      else{
        const updateEmployeeSuccessfulDialog = this.dialog.open(UpdateEmployeeSuccessfulComponent);
      }
    });
  }

  ReadEmploymentStatus(link){
    return this.http.get(`${link}/api/employee/getEmploymentStatus`);
  }
}
