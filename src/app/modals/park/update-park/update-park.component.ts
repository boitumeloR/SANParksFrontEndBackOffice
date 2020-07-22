import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateParkConfirmationComponent} from 'src/app/modals/park/update-park-confirmation/update-park-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-park',
  templateUrl: './update-park.component.html',
  styleUrls: ['./update-park.component.scss']
})
export class UpdateParkComponent implements OnInit {
  updateParkForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateParkComponent>) { }

  ngOnInit(): void {
    this.updateParkForm = this.formBuilder.group({
      parkName: ['', Validators.required],
      parkLimit : ['', [Validators.required, Validators.min(1)]],
      parkLocation : ['', Validators.required],
      parkDescription : ['', Validators.required]
    });
  }

  updatePark(){
    if(this.updateParkForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const confirmDialog = this.dialog.open(UpdateParkConfirmationComponent);
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
