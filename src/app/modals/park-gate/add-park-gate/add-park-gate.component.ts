import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkGateConfirmationComponent} from 'src/app/modals/park-gate/add-park-gate-confirmation/add-park-gate-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-park-gate',
  templateUrl: './add-park-gate.component.html',
  styleUrls: ['./add-park-gate.component.scss']
})
export class AddParkGateComponent implements OnInit {
  addParkGateForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddParkGateComponent>) { }

  ngOnInit(): void {
    this.addParkGateForm = this.formBuilder.group({
      parkGateName: ['', Validators.required],
      park : ['', Validators.required],
      parkGateLimit : ['', [Validators.required, Validators.min(1)]],
      parkGateLocation : ['', Validators.required],
      parkGateDescription: ['', Validators.required]
    });
  }
  
  addParkGate(){
    if(this.addParkGateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addParkGateConfirmationDialog = this.dialog.open(AddParkGateConfirmationComponent);
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
