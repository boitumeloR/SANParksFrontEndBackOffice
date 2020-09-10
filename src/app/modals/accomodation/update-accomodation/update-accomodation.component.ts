import { Component, OnInit } from '@angular/core';
import {UpdateAccomodationConfirmationComponent} from 'src/app/modals/accomodation/update-accomodation-confirmation/update-accomodation-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkService } from 'src/app/services/Park/park.service';
import { CampService } from 'src/app/services/Camp/camp.service';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { AccommodationService } from 'src/app/services/Accommodation/accommodation.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-update-accomodation',
  templateUrl: './update-accomodation.component.html',
  styleUrls: ['./update-accomodation.component.scss']
})
export class UpdateAccomodationComponent implements OnInit {
  updateAccomodationForm: FormGroup;
  accommodation;
  parkDropDown;
  campDropDown;
  accomodationTypeDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateAccomodationComponent>, private parkService: ParkService,
              private campService: CampService, private accomodationTypeService: AccommodationTypeService,
              private accommodationService: AccommodationService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.accommodation = JSON.parse(localStorage.getItem('accomodation'));
    this.getAccomodationTypesForCamp(this.accommodation.CampID);

    this.updateAccomodationForm = this.formBuilder.group({
      unitNumber: [this.accommodation.UnitNumber, [Validators.required, Validators.min(1)]],
      accomodationType : [this.accommodation.AccomodationTypeID, Validators.required],
      park : [this.accommodation.ParkName, Validators.required],
      camp : [this.accommodation.Camp, Validators.required]
    });
  }
  updateAccomdation(){
    if (this.updateAccomodationForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateAccomodationDialog = this.dialog.open(UpdateAccomodationConfirmationComponent);

      updateAccomodationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const updateAccommodation = {
            AccommodationID: this.accommodation.AccommodationID,
            UnitNumber: this.updateAccomodationForm.get('unitNumber').value,
            CampID: this.accommodation.CampID,
            AccomodationTypeID: this.updateAccomodationForm.get('accomodationType').value,
            authenticateUser: user
          };
          this.accommodationService.updateAccommodation(updateAccommodation, this.globalService.GetServer());
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

  getAccomodationTypesForCamp(campID){
    this.accomodationTypeService.getAccomomodationTypesForCamp(campID, this.globalService.GetServer()).subscribe((result: any) => {
      this.accomodationTypeDropDown = result.AccommodationTypes;
    });
  }
}
