import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddCampTypeConfirmationComponent} from 'src/app/modals/camp-type/add-camp-type-confirmation/add-camp-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-camp-type',
  templateUrl: './add-camp-type.component.html',
  styleUrls: ['./add-camp-type.component.scss']
})
export class AddCampTypeComponent implements OnInit {
  addCampTypeForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddCampTypeComponent>) { }

  ngOnInit(): void {
    this.addCampTypeForm = this.formBuilder.group({
      campTypeName: ['', Validators.required],
      campTypeDescription : ['', Validators.required]
    });
  }

  addCampType(){
    if(this.addCampTypeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addCampTypeDialog =  this.dialog.open(AddCampTypeConfirmationComponent,{disableClose: true});
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
