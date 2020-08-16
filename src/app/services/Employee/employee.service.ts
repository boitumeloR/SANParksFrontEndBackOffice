import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }

  CreateEmployee(Employee, link){

  }

  ReadEmployee(link){

  }

  UpdateEmployee(Employee, link){

  }
}
