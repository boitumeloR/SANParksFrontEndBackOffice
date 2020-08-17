import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserRole {
  UserRoleID: number;
  UserRoleName: string;
  UserRoleDescription: string;
}
export interface UserRoleDropDown {
  UserRoleID: number;
  UserRoleName: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserRoleService {
  constructor(private http: HttpClient) { }

  CreateUserRole(UserRole, link){

  }

  ReadUserRole(link){

  }

  UpdateUserRole(UserRole, link){

  }

  DeleteUserRole(UserRoleID){

  }
}
