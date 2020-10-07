import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {AddEmployeeSuccessfulComponent} from 'src/app/modals/employee/add-employee-successful/add-employee-successful.component';
import {AddEmployeeUnsuccessfulComponent} from 'src/app/modals/employee/add-employee-unsuccessful/add-employee-unsuccessful.component';
import {UpdateEmployeeSuccessfulComponent} from 'src/app/modals/employee/update-employee-successful/update-employee-successful.component';
import {UpdateEmployeeUnsuccessfulComponent} from 'src/app/modals/employee/update-employee-unsuccessful/update-employee-unsuccessful.component';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {SuccessfulProfileUpdateComponent} from 'src/app/modals/employee/successful-profile-update/successful-profile-update.component';
import {UnsuccessfulProfileUpdateComponent} from 'src/app/modals/employee/unsuccessful-profile-update/unsuccessful-profile-update.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
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
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateEmployee(Employee, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/employee/createEmployee`, Employee).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addEmployeeUnsuccessfulDialog = this.dialog.open(AddEmployeeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addEmployeeSuccessfulDialog = this.dialog.open(AddEmployeeSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }

  ReadEmployee(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/employee/getEmployee`, user);
  }

  UpdateEmployee(Employee, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/employee/updateEmployee`, Employee).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateEmployeeUnsuccessfulDialog = this.dialog.open(UpdateEmployeeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateEmployeeSuccessfulDialog = this.dialog.open(UpdateEmployeeSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }

  ReadEmploymentStatus(link){
    return this.http.get(`${link}/api/employee/getEmploymentStatus`);
  }

  ReadTitles(link){
    return this.http.get(`${link}/api/employee/getTitles`);
  }

  viewProfile(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/employee/viewProfile`, user);
  }

  updateProfile(Employee, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/employee/updateEmployeeProfile`, Employee).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateEmployeeUnsuccessfulDialog = this.dialog.open(UnsuccessfulProfileUpdateComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateEmployeeSuccessfulDialog = this.dialog.open(SuccessfulProfileUpdateComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
}
