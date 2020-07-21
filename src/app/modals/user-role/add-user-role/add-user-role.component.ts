import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddUserRoleConfirmationComponent} from 'src/app/modals/user-role/add-user-role-confirmation/add-user-role-confirmation.component';
@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addUserRole(){
      const addUserRoleConfirmationDialog = this.dialog.open(AddUserRoleConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
