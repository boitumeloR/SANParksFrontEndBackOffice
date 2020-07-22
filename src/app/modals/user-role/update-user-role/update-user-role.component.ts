import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateUserRoleConfirmationComponent} from 'src/app/modals/user-role/update-user-role-confirmation/update-user-role-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-user-role',
  templateUrl: './update-user-role.component.html',
  styleUrls: ['./update-user-role.component.scss']
})
export class UpdateUserRoleComponent implements OnInit {
  updateUserRoleForm: FormGroup;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateUserRoleComponent>) { }

  ngOnInit(): void {
    this.updateUserRoleForm = this.formBuilder.group({
      userRoleName: ['', Validators.required],
      userRoleDescription : ['', Validators.required]
    });
  }

  updateUserRole(){
    if(this.updateUserRoleForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
    const updateUserRoleConfirmationDialog = this.dialog.open(UpdateUserRoleConfirmationComponent)
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if(result == true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open("The entered details are not in the correct format. Please try again.", "OK", {
      duration: 3500,
    });
  }
}
