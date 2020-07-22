import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationConfirmationComponent} from 'src/app/modals/accomodation/add-accomodation-confirmation/add-accomodation-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({  
  selector: 'app-add-accomodation',
  templateUrl: './add-accomodation.component.html',
  styleUrls: ['./add-accomodation.component.scss']
})
export class AddAccomodationComponent implements OnInit {
  addAccomodationForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddAccomodationComponent>) { }

  ngOnInit(): void {
    this.addAccomodationForm = this.formBuilder.group({
      unitNumber: ['', [Validators.required, Validators.min(1)]],
      accomodationType : ['', Validators.required],
      park : ['', Validators.required],
      camp : ['', Validators.required]
    });
  }

  addAccomdation(){
    if(this.addAccomodationForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addAccomodationConfirmation = this.dialog.open(AddAccomodationConfirmationComponent);
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