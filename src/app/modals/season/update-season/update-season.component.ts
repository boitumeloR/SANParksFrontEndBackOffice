import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateSeasonConfirmationComponent} from 'src/app/modals/season/update-season-confirmation/update-season-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-season',
  templateUrl: './update-season.component.html',
  styleUrls: ['./update-season.component.scss']
})
export class UpdateSeasonComponent implements OnInit {
  updateSeasonForm: FormGroup;
  constructor(private dialog: MatDialog,private formBuilder: FormBuilder,private validationErrorSnackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateSeasonComponent>) { }

  ngOnInit(): void {
    this.updateSeasonForm = this.formBuilder.group({
      seasonName: ['', Validators.required],
      startDate : ['', Validators.required],
      endDate : ['', Validators.required]
    });
  }

  updateSeason(){
    if(this.updateSeasonForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
    const updateSeasonConfirmationDialog =  this.dialog.open(UpdateSeasonConfirmationComponent);
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
