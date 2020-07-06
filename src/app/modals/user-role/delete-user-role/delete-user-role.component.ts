import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteUserRoleSuccessfulComponent } from 'src/app/modals/user-role/delete-user-role-successful/delete-user-role-successful.component';

@Component({
  selector: 'app-delete-user-role',
  templateUrl: './delete-user-role.component.html',
  styleUrls: ['./delete-user-role.component.scss']
})
export class DeleteUserRoleComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteUserRole(){
    const deleteUserRoleSuccessfulDialog = this.dialog.open(DeleteUserRoleSuccessfulComponent);
  }
}
