import { Component, OnInit } from '@angular/core';
import {UpdateAccomodationConfirmationComponent} from 'src/app/modals/accomodation/update-accomodation-confirmation/update-accomodation-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-accomodation',
  templateUrl: './update-accomodation.component.html',
  styleUrls: ['./update-accomodation.component.scss']
})
export class UpdateAccomodationComponent implements OnInit {
  updateAccomodationForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateAccomodationComponent>) { }

  ngOnInit(): void {
    this.updateAccomodationForm = this.formBuilder.group({
      unitNumber: ['', [Validators.required, Validators.min(1)]],
      accomodationType : ['', Validators.required],
      park : ['', Validators.required],
      camp : ['', Validators.required]
    });
  }
  updateAccomdation(){
    if(this.updateAccomodationForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateAccomodationDialog = this.dialog.open(UpdateAccomodationConfirmationComponent)
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
