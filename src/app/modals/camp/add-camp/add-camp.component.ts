import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddCampConfirmationComponent} from 'src/app/modals/camp/add-camp-confirmation/add-camp-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.scss']
})
export class AddCampComponent implements OnInit {
  addCampForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddCampComponent>) { }

  ngOnInit(): void {
    this.addCampForm = this.formBuilder.group({
      campName: ['', Validators.required],
      campType : ['', Validators.required],
      park : ['', Validators.required],
      campDescription : ['', Validators.required],
      campLocation: ['',Validators.required]
    });
  }

  addCamp(){
    if(this.addCampForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addCampDialog = this.dialog.open(AddCampConfirmationComponent)
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
