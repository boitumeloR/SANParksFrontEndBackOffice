import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateUserRoleConfirmationComponent} from 'src/app/modals/user-role/update-user-role-confirmation/update-user-role-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRoleService, UserRole } from 'src/app/services/UserRole/user-role.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-update-user-role',
  templateUrl: './update-user-role.component.html',
  styleUrls: ['./update-user-role.component.scss']
})
export class UpdateUserRoleComponent implements OnInit {
  updateUserRoleForm: FormGroup;
  userRole: UserRole;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateUserRoleComponent>, private userRoleService: UserRoleService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.userRole = JSON.parse(localStorage.getItem('userRole'));
    this.updateUserRoleForm = this.formBuilder.group({
      userRoleName: [this.userRole.UserRoleName, Validators.required],
      userRoleDescription : [this.userRole.UserRoleDescription, Validators.required]
    });
  }

  updateUserRole(){
    if (this.updateUserRoleForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateUserRoleConfirmationDialog = this.dialog.open(UpdateUserRoleConfirmationComponent);
      updateUserRoleConfirmationDialog.afterClosed().subscribe( result => {
        if (result === true){
           const user = JSON.parse(localStorage.getItem('user'));

           const userRole = {
            UserRoleID: this.userRole.RoleID,
            UserRoleName: this.updateUserRoleForm.get('userRoleName').value,
            UserRoleDescription: this.updateUserRoleForm.get('userRoleDescription').value,
            authenticateUser: user
          };
           this.userRoleService.UpdateUserRole(userRole, this.globalService.GetServer());
        }
      });
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
