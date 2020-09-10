import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationConfirmationComponent} from 'src/app/modals/accomodation/add-accomodation-confirmation/add-accomodation-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkService } from 'src/app/services/Park/park.service';
import { CampService } from 'src/app/services/Camp/camp.service';
import { AccommodationService } from 'src/app/services/Accommodation/accommodation.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AccommodationType, AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
@Component({
  selector: 'app-add-accomodation',
  templateUrl: './add-accomodation.component.html',
  styleUrls: ['./add-accomodation.component.scss']
})
export class AddAccomodationComponent implements OnInit {
  addAccomodationForm: FormGroup;
  parkDropDown;
  campDropDown;
  accomodationTypeDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddAccomodationComponent>, private parkService: ParkService,
              private campService: CampService, private accomodationTypeService: AccommodationTypeService,
              private accommodationService: AccommodationService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));
    });

    this.addAccomodationForm = this.formBuilder.group({
      unitNumber: ['', [Validators.required, Validators.min(1)]],
      accomodationType : ['', Validators.required],
      park : ['', Validators.required],
      camp : ['', Validators.required]
    });
  }

  addAccomdation(){
    if (this.addAccomodationForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addAccomodationConfirmation = this.dialog.open(AddAccomodationConfirmationComponent);

      addAccomodationConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const newAccommodation = {
            UnitNumber: this.addAccomodationForm.get('unitNumber').value,
            CampID: this.addAccomodationForm.get('camp').value,
            AccomodationTypeID: this.addAccomodationForm.get('accomodationType').value,
            authenticateUser: user
          };
          this.accommodationService.createAccommodation(newAccommodation, this.globalService.GetServer());
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

displayValidationError(){
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
    this.accomodationTypeService.getAccomomodationTypesForCamp(campID, this.globalService.GetServer()).subscribe((result: any) => {
      this.accomodationTypeDropDown = result.AccommodationTypes;
    });
  }
}
