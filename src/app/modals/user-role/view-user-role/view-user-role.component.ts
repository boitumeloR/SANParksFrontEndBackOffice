import { Component, OnInit } from '@angular/core';
import {UpdateUserRoleComponent} from 'src/app/modals/user-role/update-user-role/update-user-role.component';
import { DeleteUserRoleComponent} from 'src/app/modals/user-role/delete-user-role/delete-user-role.component'
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-view-user-role',
  templateUrl: './view-user-role.component.html',
  styleUrls: ['./view-user-role.component.scss']
})
export class ViewUserRoleComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateUserRole(){
    const updateUserRoleDialog = this.dialog.open(UpdateUserRoleComponent,{disableClose: true});
  }

  deleteUserRole(){
    const deleteUserRoleDialog =  this.dialog.open(DeleteUserRoleComponent);
  }
} 
