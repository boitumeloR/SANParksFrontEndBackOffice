import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateUserRoleSuccessfulComponent} from 'src/app/modals/user-role/update-user-role-successful/update-user-role-successful.component';

@Component({
  selector: 'app-update-user-role-confirmation',
  templateUrl: './update-user-role-confirmation.component.html',
  styleUrls: ['./update-user-role-confirmation.component.scss']
})
export class UpdateUserRoleConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateUserRole(){
    const updateUserRoleSuccessfulDialog = this.dialog.open(UpdateUserRoleSuccessfulComponent);
  }
}
