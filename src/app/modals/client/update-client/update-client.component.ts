import { Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateClientConfirmationComponent} from 'src/app/modals/client/update-client-confirmation/update-client-confirmation.component';
@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.scss']
})
export class UpdateClientComponent implements OnInit {
  updateClientForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateClientComponent>) { }

  ngOnInit(): void {
    this.updateClientForm = this.formBuilder.group({
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

  updateClient(){
    if(this.updateClientForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateClientConfirmationDialog = this.dialog.open(UpdateClientConfirmationComponent);
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
