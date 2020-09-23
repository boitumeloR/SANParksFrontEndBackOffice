import { Component, OnInit, ViewChild} from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddAmenityPenaltyConfirmationComponent } from 'src/app/modals/amenity-penalty/add-amenity-penalty-confirmation/add-amenity-penalty-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ParkService } from 'src/app/services/Park/park.service';
import { CampService } from 'src/app/services/Camp/camp.service';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AmenityService } from 'src/app/services/Amenity/amenity.service';
import { AccommodationService } from 'src/app/services/Accommodation/accommodation.service';
import { AmenityPenaltyService } from 'src/app/services/AmenityPenalty/amenity-penalty.service';

@Component({
  selector: 'app-add-amenity-penalty',
  templateUrl: './add-amenity-penalty.component.html',
  styleUrls: ['./add-amenity-penalty.component.scss']
})
export class AddAmenityPenaltyComponent implements OnInit {
  @ViewChild('stepper') private myStepper: MatStepper;
  amenityLocation: FormGroup;
  amenityDetails: FormGroup;
  parkDropDown;
  campDropDown;
  accomodationTypeDropDown;
  unitNumberDropDown;
  campSelected;
  amenityDropDown;
  accTypeSelected;
  listOfYears = [];
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddAmenityPenaltyComponent>, private parkService: ParkService,
              private accomodationTypeService: AccommodationTypeService, private campService: CampService,
              private globalService: GlobalService, private amenityService: AmenityService,
              private accommodationService: AccommodationService, private amenityPenaltyService: AmenityPenaltyService) { }

  ngOnInit(): void {
    let year = new Date().getFullYear();
    const limitYear = year + 4;
    while (year <= limitYear){
      this.listOfYears.push(year);
      year += 1;
     }

    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));
    });

    this.amenityLocation = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      unitNumber : ['', Validators.required],
      amenity: ['', Validators.required]
    });

    this.amenityDetails = this.formBuilder.group({
      amenityPenalty: ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
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

  addAmenityPenalty(){
    if (this.amenityDetails.invalid){
      this.displayValidationError();
    }
    else{
    this.dialogRef.close();
    const addAmenityPenaltyConfirmationDialog = this.dialog.open(AddAmenityPenaltyConfirmationComponent);

    addAmenityPenaltyConfirmationDialog.afterClosed().subscribe( result => {
      if (result === true){
         const user = JSON.parse(localStorage.getItem('user'));

         const newAmenityPenalty = {
          AmenityID: this.amenityLocation.get('amenity').value,
          AmenityPenaltyAmount: this.amenityDetails.get('amenityPenalty').value,
          DateEffective: this.amenityDetails.get('dateEffective').value,
          authenticateUser: user
        };
         this.amenityPenaltyService.createAmenityPenalty(newAmenityPenalty, this.globalService.GetServer());
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
    this.accTypeSelected = accTypeID;
    this.accommodationService.readAccommodationsForAccTypeCamp(accTypeID, this.campSelected, this.globalService.GetServer()).
    subscribe((result: any) => {
      this.unitNumberDropDown = result.Accomodations;
    });
  }

  getUnitsInAmenity(unitNumber){
    this.amenityService.readAmenityInUnit(unitNumber, this.campSelected, this.accTypeSelected, this.globalService.GetServer()).
    subscribe((result: any) => {
      this.amenityDropDown = result.listOfAmenity;
    });
  }
}

