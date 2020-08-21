import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GlobalService} from 'src/app/services/Global/global.service';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddUserRoleSuccessfulComponent } from 'src/app/modals/user-role/add-user-role-successful/add-user-role-successful.component';
import { AddUserRoleUnsuccessfulComponent } from 'src/app/modals/user-role/add-user-role-unsuccessful/add-user-role-unsuccessful.component';
import { UpdateUserRoleSuccessfulComponent} from 'src/app/modals/user-role/update-user-role-successful/update-user-role-successful.component';
import { UpdateUserRoleUnsuccessfulComponent} from 'src/app/modals/user-role/update-user-role-unsuccessful/update-user-role-unsuccessful.component';
import { DeleteUserRoleSuccessfulComponent} from 'src/app/modals/user-role/delete-user-role-successful/delete-user-role-successful.component';
import { DeleteUserRoleUnsuccessfulComponent} from 'src/app/modals/user-role/delete-user-role-unsuccessful/delete-user-role-unsuccessful.component';
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
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateUserRole(UserRole, link){
    return this.http.post(`${link}/api/UserRole/CreateUserRole`, UserRole).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
       const addUserRoleUnsuccessfulComponent = this.dialog.open(AddUserRoleUnsuccessfulComponent);
      }
      else{
       const addUserRoleSuccessfulComponent = this.dialog.open(AddUserRoleSuccessfulComponent);
      }
    });
  }

  ReadUserRole(link){
    return this.http.get(`${link}/api/UserRole/getUserRole`);
  }

  UpdateUserRole(UserRole, link){
    return this.http.post(`${link}/api/UserRole/UpdateUserRole`, UserRole).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((UpdateResult: any) => {
      if (UpdateResult.Error){
       const updateUserRoleUnsuccessfulComponent = this.dialog.open(UpdateUserRoleUnsuccessfulComponent);
      }
      else{
       const updateUserRoleSuccessfulComponent = this.dialog.open(UpdateUserRoleSuccessfulComponent);
      }
    });
  }

  DeleteUserRole(UserRoleID, link){
    return this.http.delete(`${link}/api/UserRole/DeleteUserRole?userRoleID=${UserRoleID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteUserRoleUnsuccessfulDialog = this.dialog.open(DeleteUserRoleUnsuccessfulComponent);
      }
      else{
        const deleteUserRoleSuccessfulDialog = this.dialog.open(DeleteUserRoleSuccessfulComponent);
      }
    });
  }
}

