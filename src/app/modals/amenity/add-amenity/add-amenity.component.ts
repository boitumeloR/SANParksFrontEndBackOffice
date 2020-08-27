import { Component, OnInit, ViewChild} from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddAmenityConfirmationComponent } from 'src/app/modals/amenity/add-amenity-confirmation/add-amenity-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { AccommodationService } from 'src/app/services/Accommodation/accommodation.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { CampService } from 'src/app/services/Camp/camp.service';
import { AmenityTypeService } from 'src/app/services/AmenityType/amenity-type.service';
import { AmenityService } from 'src/app/services/Amenity/amenity.service';
@Component({
  selector: 'app-add-amenity',
  templateUrl: './add-amenity.component.html',
  styleUrls: ['./add-amenity.component.scss']
})
export class AddAmenityComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  parkDropDown;
  campDropDown;
  accomodationTypeDropDown;
  unitNumberDropDown;
  accommodations;
  campSelected;
  amenityTypeDropDown;
  amenityStatusDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddAmenityComponent>, private parkService: ParkService,
              private accomodationTypeService: AccommodationTypeService, private campService: CampService,
              private accommodationService: AccommodationService, private globalService: GlobalService,
              private amenityTypeService: AmenityTypeService, private amenityService: AmenityService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
    });

    this.accommodationService.readAccommodation(this.globalService.GetServer()).subscribe((result: any) => {
      this.accommodations = result.Accomodations;
    });

    this.amenityService.readAmenityStatus(this.globalService.GetServer()).subscribe((result: any) => {
      this.amenityStatusDropDown = result.listOfAmenityStatus;
    });

    this.amenityTypeService.readAmenityType(this.globalService.GetServer()).subscribe((result: any) => {
      this.amenityTypeDropDown = result.AmenityTypes;
    });

    this.amenityLocation = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      unitNumber : ['', Validators.required]
    });

    this.amenityDetails = this.formBuilder.group({
      amenityType: ['', Validators.required],
      amenityDescription : ['', Validators.required],
      amenityStatus : ['', Validators.required]
    });
  }

  stepperNext(){
    if (this.amenityLocation.invalid){
      this.displayValidationError();
    }
    else{
      this.myStepper.next();
    }
  }

  addAmenity(){
    if (this.amenityDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const addAmenityConfirmationDialog = this.dialog.open(AddAmenityConfirmationComponent);

    addAmenityConfirmationDialog.afterClosed().subscribe( result => {
      if (result === true){
         const newAmenity = {
          AmenityTypeID: this.amenityDetails.get('amenityType').value,
          CampID: this.amenityLocation.get('camp').value,
          AccommodationTypeID: this.amenityLocation.get('accomodationType').value,
          AmenityStatusID: this.amenityDetails.get('amenityStatus').value,
          AmenityDescription: this.amenityDetails.get('amenityDescription').value,
          UnitNumber: this.amenityLocation.get('unitNumber').value,
        };
         this.amenityService.createAmenity(newAmenity, this.globalService.GetServer());
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

  getCampsForPark(parkID){
    this.campService.getCampsForSpecificPark(parkID, this.globalService.GetServer()).subscribe((result: any) => {
      this.campDropDown = result.Camps;
    });
  }

  getAccomodationTypesForCamp(campID){
    this.campSelected = campID;
    this.accomodationTypeService.getAccomomodationTypesForCamp(campID, this.globalService.GetServer()).subscribe((result: any) => {
      this.accomodationTypeDropDown = result.AccommodationTypes;
    });
  }

  getUnitNumbers(accTypeID){
    this.accommodationService.readAccommodationsForAccTypeCamp(accTypeID, this.campSelected, this.globalService.GetServer()).
    subscribe((result: any) => {
      this.unitNumberDropDown = result.Accomodations;
    });
  }
}
