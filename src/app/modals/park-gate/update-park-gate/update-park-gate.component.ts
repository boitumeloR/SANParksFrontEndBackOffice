import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateParkGateConfirmationComponent} from 'src/app/modals/park-gate/update-park-gate-confirmation/update-park-gate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-park-gate',
  templateUrl: './update-park-gate.component.html',
  styleUrls: ['./update-park-gate.component.scss']
})
export class UpdateParkGateComponent implements OnInit {
  updateParkGateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateParkGateComponent>) { }

  ngOnInit(): void {
    this.updateParkGateForm = this.formBuilder.group({
      parkGateName: ['', Validators.required],
      park : ['', Validators.required],
      parkGateLimit : ['', [Validators.required, Validators.min(1)]],
      parkGateLocation : ['', Validators.required],
      parkGateDescription: ['', Validators.required]
    });
  }

  updateParkGate(){
    if(this.updateParkGateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
    const confirmDialog = this.dialog.open(UpdateParkGateConfirmationComponent);
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
