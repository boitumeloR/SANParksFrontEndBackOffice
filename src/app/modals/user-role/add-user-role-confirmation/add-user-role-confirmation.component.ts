import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddUserRoleSuccessfulComponent} from 'src/app/modals/user-role/add-user-role-successful/add-user-role-successful.component';
import {AddUserRoleUnsuccessfulComponent} from 'src/app/modals/user-role/add-user-role-unsuccessful/add-user-role-unsuccessful.component';

@Component({
  selector: 'app-add-user-role-confirmation',
  templateUrl: './add-user-role-confirmation.component.html',
  styleUrls: ['./add-user-role-confirmation.component.scss']
})
export class AddUserRoleConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddUserRole(){
    const addUserRoleSuccessfulDialog = this.dialog.open(AddUserRoleSuccessfulComponent);
  }

  unsuccessfulAddUserRole(){
    const addUserRoleUnsuccessfulDialog = this.dialog.open(AddUserRoleUnsuccessfulComponent);
  }
} 
