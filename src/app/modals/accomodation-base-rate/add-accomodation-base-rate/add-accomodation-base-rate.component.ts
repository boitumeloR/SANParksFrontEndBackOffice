import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationBaseRateConfirmationComponent} from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate-confirmation/add-accomodation-base-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { CampService } from 'src/app/services/Camp/camp.service';
import { AccommodationTypeBaseRate, AccommBaseRateService } from 'src/app/services/AccommBaseRate/accomm-base-rate.service';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { SeasonService } from 'src/app/services/Season/season.service';
@Component({
  selector: 'app-add-accomodation-base-rate',
  templateUrl: './add-accomodation-base-rate.component.html',
  styleUrls: ['./add-accomodation-base-rate.component.scss']
})
export class AddAccomodationBaseRateComponent implements OnInit {
  addAccomodationBaseRateForm: FormGroup;
  parkDropDown;
  campDropDown;
  accomodationTypeDropDown;
  seasonDropDown;
  selectedSeason;
  seasonSelected: boolean;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddAccomodationBaseRateComponent>, private globalService: GlobalService,
              private accTypeBaseRateService: AccommBaseRateService, private parkService: ParkService,
              private accomodationTypeService: AccommodationTypeService, private campService: CampService,
              private seasonService: SeasonService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;

      this.seasonService.ReadSeason(this.globalService.GetServer()).subscribe((seasonResult: any) => {
        this.seasonDropDown = seasonResult.Seasons;
      });
    });

    this.addAccomodationBaseRateForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      accomodationType : ['', Validators.required],
      baseRate : ['', [Validators.required, Validators.min(1)]],
      season : ['', Validators.required]
    });
  }

  addAccomodationBaseRate(){
    if (this.addAccomodationBaseRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addAccomodationBaseRateConfirmation = this.dialog.open(AddAccomodationBaseRateConfirmationComponent);

      addAccomodationBaseRateConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const newBaseRate = {
            AccommodationTypeID: this.addAccomodationBaseRateForm.get('accomodationType').value,
            CampID: this.addAccomodationBaseRateForm.get('camp').value,
            BaseRateAmount: this.addAccomodationBaseRateForm.get('baseRate').value,
            SeasonID: this.addAccomodationBaseRateForm.get('season').value,
            authenticateUser: user
          };

          this.accTypeBaseRateService.createAccommodationTypeBaseRate(newBaseRate, this.globalService.GetServer());
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
    this.accomodationTypeService.getAccomomodationTypesForCamp(campID, this.globalService.GetServer()).subscribe((result: any) => {
      this.accomodationTypeDropDown = result.AccommodationTypes;
    });
  }

  displaySeasonDates(SeasonID){
    this.selectedSeason = this.seasonDropDown.find(XX => XX.SeasonID === SeasonID);
    this.seasonSelected = true;
  }
}
