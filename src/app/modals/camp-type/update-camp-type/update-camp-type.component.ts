import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateCampTypeConfirmationComponent} from 'src/app/modals/camp-type/update-camp-type-confirmation/update-camp-type-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { CampType, CampTypeService} from 'src/app/services/CampType/camp-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-update-camp-type',
  templateUrl: './update-camp-type.component.html',
  styleUrls: ['./update-camp-type.component.scss']
})
export class UpdateCampTypeComponent implements OnInit {
  updateCampTypeForm: FormGroup;
  campType: CampType;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateCampTypeComponent>, private campTypeService: CampTypeService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.campType = JSON.parse(localStorage.getItem('campType'));
    this.updateCampTypeForm = this.formBuilder.group({
      campTypeName: [this.campType.CampTypeName, Validators.required],
      campTypeDescription : [this.campType.CampTypeDescription, Validators.required]
    });
  }

  updateCampType(){
    if (this.updateCampTypeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const UpdateCampTypeConfirmation = this.dialog.open(UpdateCampTypeConfirmationComponent);
      UpdateCampTypeConfirmation.afterClosed().subscribe( result => {
        if (result === true){
           const campType = {
            CampTypeID: this.campType.CampTypeID,
            CampTypeName: this.updateCampTypeForm.get('campTypeName').value,
            CampTypeDescription: this.updateCampTypeForm.get('campTypeDescription').value
          };
           this.campTypeService.UpdateCampType(campType, this.globalService.GetServer());
        }
      });
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
