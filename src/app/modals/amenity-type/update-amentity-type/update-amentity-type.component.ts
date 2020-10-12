import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateAmentityTypeConfirmationComponent} from 'src/app/modals/amenity-type/update-amentity-type-confirmation/update-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import {AmenityTypeService, AmenityType} from 'src/app/services/AmenityType/amenity-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-update-amentity-type',
  templateUrl: './update-amentity-type.component.html',
  styleUrls: ['./update-amentity-type.component.scss']
})
export class UpdateAmentityTypeComponent implements OnInit {
  updateAmenityTypeForm: FormGroup;
  amenityType: AmenityType;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateAmentityTypeComponent>,
              private globalService: GlobalService, private amenityTypeService: AmenityTypeService) { }

  ngOnInit(): void {
    this.amenityType = JSON.parse(localStorage.getItem('amenityType'));

    this.updateAmenityTypeForm = this.formBuilder.group({
      amenityTypeName: [this.amenityType.AmenityTypeName, Validators.required],
    });
  }

  updateAmenityType(){
    if (this.updateAmenityTypeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateAmenityTypeConfirmDialog = this.dialog.open(UpdateAmentityTypeConfirmationComponent);

      updateAmenityTypeConfirmDialog.afterClosed().subscribe( result => {
        if (result === true){
           const user = JSON.parse(localStorage.getItem('user'));
           const amenityType = {
            AmenityTypeID: this.amenityType.AmenityTypeID,
            AmenityTypeName: this.updateAmenityTypeForm.get('amenityTypeName').value,
            authenticateUser: user
          };
           this.amenityTypeService.updateAmenityType(amenityType, this.globalService.GetServer());
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
