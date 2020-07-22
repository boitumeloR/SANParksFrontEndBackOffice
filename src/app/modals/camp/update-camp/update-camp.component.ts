import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateCampConfirmationComponent} from 'src/app/modals/camp/update-camp-confirmation/update-camp-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-camp',
  templateUrl: './update-camp.component.html',
  styleUrls: ['./update-camp.component.scss']
})
export class UpdateCampComponent implements OnInit {
  updateCampForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateCampComponent>) { }

  ngOnInit(): void {
    this.updateCampForm = this.formBuilder.group({
      campName: ['', Validators.required],
      campType : ['', Validators.required],
      park : ['', Validators.required],
      campDescription : ['', Validators.required],
      campLocation: ['',Validators.required]
    });
  }

  updateCamp(){
    if(this.updateCampForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const udpateCampDialog = this.dialog.open(UpdateCampConfirmationComponent)
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
