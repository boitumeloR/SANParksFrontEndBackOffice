import { Component, OnInit, ViewChild} from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAmenityConfirmationComponent } from 'src/app/modals/amenity/update-amenity-confirmation/update-amenity-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { AmenityService } from 'src/app/services/Amenity/amenity.service';
import { AmenityTypeService } from 'src/app/services/AmenityType/amenity-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-update-amenity',
  templateUrl: './update-amenity.component.html',
  styleUrls: ['./update-amenity.component.scss']
})
export class UpdateAmenityComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  amenity;
  amenityTypeDropDown;
  amenityStatusDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateAmenityComponent>, private amenityTypeService: AmenityTypeService,
              private amenityService: AmenityService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.amenity = JSON.parse(localStorage.getItem('amenity'));

    this.amenityService.readAmenityStatus(this.globalService.GetServer()).subscribe((result: any) => {
      this.amenityStatusDropDown = result.listOfAmenityStatus;
    });

    this.amenityTypeService.readAmenityType(this.globalService.GetServer()).subscribe((result: any) => {
      this.amenityTypeDropDown = result.AmenityTypes;
    });

    this.amenityDetails = this.formBuilder.group({
      amenityType: [this.amenity.AmenityTypeID, Validators.required],
      amenityDescription : [this.amenity.Description, Validators.required],
      amenityStatus : [this.amenity.AmenityStatusID, Validators.required]
    });
  }

  updateAmenity(){
    if (this.amenityDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const updateAmenityConfirmationDialog = this.dialog.open(UpdateAmenityConfirmationComponent);

    updateAmenityConfirmationDialog.afterClosed().subscribe( result => {
      if (result === true){
         const updateAmenity = {
          AmenityID: this.amenity.AmenityID,
          AmenityTypeID: this.amenityDetails.get('amenityType').value,
          AmenityStatusID: this.amenityDetails.get('amenityStatus').value,
          AmenityDescription: this.amenityDetails.get('amenityDescription').value
        };
         this.amenityService.updateAmenity(updateAmenity, this.globalService.GetServer());
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
