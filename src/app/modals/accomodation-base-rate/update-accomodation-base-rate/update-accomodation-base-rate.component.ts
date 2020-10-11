import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAccomodationBaseRateConfirmationComponent } from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate-confirmation/update-accomodation-base-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { SeasonService } from 'src/app/services/Season/season.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AccommBaseRateService } from 'src/app/services/AccommBaseRate/accomm-base-rate.service';
@Component({
  selector: 'app-update-accomodation-base-rate',
  templateUrl: './update-accomodation-base-rate.component.html',
  styleUrls: ['./update-accomodation-base-rate.component.scss']
})
export class UpdateAccomodationBaseRateComponent implements OnInit {
  updateAccomodationBaseRateForm: FormGroup;
  seasonDropDown;
  seasonSelected: boolean;
  selectedSeason;
  baseRate;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateAccomodationBaseRateComponent>, private seasonService: SeasonService,
              private globalService: GlobalService, private accTypeBaseRateService: AccommBaseRateService) { }

  ngOnInit(): void {
    this.baseRate = JSON.parse(localStorage.getItem('baseRate'));

    this.seasonService.ReadSeason(this.globalService.GetServer()).subscribe((result: any) => {
      this.seasonDropDown = result.Seasons;
      this.displaySeasonDates(this.baseRate.SeasonID);
    });

    this.updateAccomodationBaseRateForm = this.formBuilder.group({
      park: [this.baseRate.ParkName, Validators.required],
      camp : [this.baseRate.CampName, Validators.required],
      accomodationType : [this.baseRate.AccomodationType, Validators.required],
      baseRate : [this.baseRate.BaseRateAmount, [Validators.required, Validators.min(1)]],
      season : [this.baseRate.SeasonID, Validators.required]
    });
  }

  updateAccomodationBaseRate(){
    if (this.updateAccomodationBaseRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateAccomodationBaseRateConfirmation = this.dialog.open(UpdateAccomodationBaseRateConfirmationComponent);

      updateAccomodationBaseRateConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const newBaseRate = {
            BaseRateID: this.baseRate.BaseRateID,
            AccommodationTypeID: this.baseRate.AccommodationTypeID,
            CampID: this.baseRate.CampID,
            BaseRateAmount: this.updateAccomodationBaseRateForm.get('baseRate').value,
            SeasonID: this.updateAccomodationBaseRateForm.get('season').value,
            authenticateUser: user
          };

          this.accTypeBaseRateService.updateAccommodationTypeBaseRate(newBaseRate, this.globalService.GetServer());
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

  displaySeasonDates(SeasonID){
    this.selectedSeason = this.seasonDropDown.find(XX => XX.SeasonID === SeasonID);
    this.seasonSelected = true;
  }
}
