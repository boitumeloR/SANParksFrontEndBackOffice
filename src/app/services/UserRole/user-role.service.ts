import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {GlobalService} from 'src/app/services/Global/global.service';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddUserRoleSuccessfulComponent } from 'src/app/modals/user-role/add-user-role-successful/add-user-role-successful.component';
import { AddUserRoleUnsuccessfulComponent } from 'src/app/modals/user-role/add-user-role-unsuccessful/add-user-role-unsuccessful.component';
import { UpdateUserRoleSuccessfulComponent} from 'src/app/modals/user-role/update-user-role-successful/update-user-role-successful.component';
import { UpdateUserRoleUnsuccessfulComponent} from 'src/app/modals/user-role/update-user-role-unsuccessful/update-user-role-unsuccessful.component';
import { DeleteUserRoleSuccessfulComponent} from 'src/app/modals/user-role/delete-user-role-successful/delete-user-role-successful.component';
import { DeleteUserRoleUnsuccessfulComponent} from 'src/app/modals/user-role/delete-user-role-unsuccessful/delete-user-role-unsuccessful.component';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserRoleAddComponent} from 'src/app/workflows/user-role-add/user-role-add.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface UserRole {
  RoleID: number;
  UserRoleName: string;
  UserRoleDescription: string;
}
export interface UserRoleDropDown {
  RoleID: number;
  UserRoleName: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserRoleService {
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog, private router: Router,
              private bottomSheet: MatBottomSheet, private snackbar: MatSnackBar) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  CreateUserRole(UserRole, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/UserRole/CreateUserRole`, UserRole).subscribe((addResult: any) => {
      if (addResult.Error){
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addUserRoleUnsuccessfulComponent = this.dialog.open(AddUserRoleUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(addResult.user));
       const addUserRoleSuccessfulComponent = this.dialog.open(AddUserRoleSuccessfulComponent);
       this.refresh.next();

       addUserRoleSuccessfulComponent.afterClosed().subscribe(() => {
        const parkFlowSheet =  this.bottomSheet.open(UserRoleAddComponent);
       });
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  ReadUserRole(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/UserRole/getUserRole`, user);
  }

  UpdateUserRole(UserRole, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/UserRole/UpdateUserRole`, UserRole).subscribe((UpdateResult: any) => {
      if (UpdateResult.Error){
       localStorage.setItem('user', JSON.stringify(UpdateResult.user));
       const updateUserRoleUnsuccessfulComponent = this.dialog.open(UpdateUserRoleUnsuccessfulComponent);
       this.refresh.next();
      }
      else if (UpdateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
       localStorage.setItem('user', JSON.stringify(UpdateResult.user));
       const updateUserRoleSuccessfulComponent = this.dialog.open(UpdateUserRoleSuccessfulComponent);
       this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  DeleteUserRole(user, UserRoleID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/UserRole/DeleteUserRole?userRoleID=${UserRoleID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteUserRoleUnsuccessfulDialog = this.dialog.open(DeleteUserRoleUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteUserRoleSuccessfulDialog = this.dialog.open(DeleteUserRoleSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
}

