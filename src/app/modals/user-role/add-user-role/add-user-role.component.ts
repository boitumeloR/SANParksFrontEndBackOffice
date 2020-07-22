import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddUserRoleConfirmationComponent} from 'src/app/modals/user-role/add-user-role-confirmation/add-user-role-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {
  addUserRoleForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddUserRoleComponent>) { }

  ngOnInit(): void {
    this.addUserRoleForm = this.formBuilder.group({
      userRoleName: ['', Validators.required],
      userRoleDescription : ['', Validators.required]
    });
  }

  addUserRole(){
    if(this.addUserRoleForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addUserRoleConfirmationDialog = this.dialog.open(AddUserRoleConfirmationComponent);
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
