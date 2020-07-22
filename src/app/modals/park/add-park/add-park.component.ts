import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkConfirmationComponent} from 'src/app/modals/park/add-park-confirmation/add-park-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-park',
  templateUrl: './add-park.component.html',
  styleUrls: ['./add-park.component.scss']
})
export class AddParkComponent implements OnInit {
  addParkForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddParkComponent>) { }

  ngOnInit(): void {
    this.addParkForm = this.formBuilder.group({
      parkName: ['', Validators.required],
      parkLimit : ['', [Validators.required, Validators.min(1)]],
      parkLocation : ['', Validators.required],
      parkDescription : ['', Validators.required]
    });
  }
  addPark(){
    if(this.addParkForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addParkConfirmationDiag = this.dialog.open(AddParkConfirmationComponent);
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
