import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddClientConfirmationComponent} from 'src/app/modals/client/add-client-confirmation/add-client-confirmation.component';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  addClientForm: FormGroup;

  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddClientComponent>) { }

  ngOnInit(): void {
    this.addClientForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname : ['', Validators.required],
      identityNumber : ['', Validators.required],
      cellphoneNumber : ['', Validators.required],
      title : ['', Validators.required],
      emailAddress : ['', [Validators.required,Validators.email]],
      addressLine1 : ['', Validators.required],
      addressLine2 : ['', Validators.required],
      postalCode : ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  addClient(){
    if(this.addClientForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addClientConfirmationDialog = this.dialog.open(AddClientConfirmationComponent);
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
