import { Component, OnInit } from '@angular/core';

import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateUserRoleConfirmationComponent} from 'src/app/modals/user-role/update-user-role-confirmation/update-user-role-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-update-user-role',
  templateUrl: './update-user-role.component.html',
  styleUrls: ['./update-user-role.component.scss']
})
export class UpdateUserRoleComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateUserRole(){
    const updateUserRoleConfirmationDialog = this.dialog.open(UpdateUserRoleConfirmationComponent)
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
