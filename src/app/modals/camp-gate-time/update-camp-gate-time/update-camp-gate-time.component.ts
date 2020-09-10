import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateCampGateTimeConfirmationComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-confirmation/update-camp-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { CampGateTime, CampGateTimeService } from 'src/app/services/CampGateTime/camp-gate-time.service';
import { SeasonService } from 'src/app/services/Season/season.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-update-camp-gate-time',
  templateUrl: './update-camp-gate-time.component.html',
  styleUrls: ['./update-camp-gate-time.component.scss']
})
export class UpdateCampGateTimeComponent implements OnInit {
  clockTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#fff',
        buttonColor: '#388e3c'
    },
    dial: {
        dialBackgroundColor: '#388e3c',
    },
    clockFace: {
        clockFaceBackgroundColor: '#fff',
        clockHandColor: '#388e3c',
        clockFaceTimeInactiveColor: '#388e3c'
    }
  };
  updateCampGateTimeForm: FormGroup;
  campGateTime: CampGateTime;
  seasonDropDown;
  seasonSelected: boolean;
  selectedSeason;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateCampGateTimeComponent>, private seasonService: SeasonService,
              private globalService: GlobalService, private campGateTimeService: CampGateTimeService) { }

  ngOnInit(): void {
    this.campGateTime = JSON.parse(localStorage.getItem('campGateTime'));
    this.seasonService.ReadSeason(this.globalService.GetServer()).subscribe((result: any) => {
      this.seasonDropDown = result.Seasons;
      this.displaySeasonDates(this.campGateTime.SeasonID);
      localStorage.setItem('user', JSON.stringify(result.user));
    });

    this.updateCampGateTimeForm = this.formBuilder.group({
      park: [this.campGateTime.ParkName, Validators.required],
      camp : [this.campGateTime.CampName, Validators.required],
      season : [this.campGateTime.SeasonID, Validators.required],
      openTime : [this.campGateTime.CampOpenTime, Validators.required],
      closeTime: [this.campGateTime.CampCloseTime, Validators.required]
    });
  }

  updateCampGateTime(){
    if (this.updateCampGateTimeForm.invalid){
      this.displayValidationError();
    }
    else if (this.updateCampGateTimeForm.get('openTime').value >= this.updateCampGateTimeForm.get('closeTime').value){
      this.displayTimeError();
    }
    else{
      this.dialogRef.close();
      const updateCampGateTimeConfirmationDialog = this.dialog.open(UpdateCampGateTimeConfirmationComponent);

      updateCampGateTimeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));
          const campGateTime = {
            CampGateTimeID: this.campGateTime.CampGateTimeID,
            SeasonID: this.updateCampGateTimeForm.get('season').value,
            CampOpenTime: this.updateCampGateTimeForm.get('openTime').value,
            CampCloseTime: this.updateCampGateTimeForm.get('closeTime').value,
            authenticateUser: user
          };

          this.campGateTimeService.updateCampGateTime(campGateTime, this.globalService.GetServer());
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

  displayTimeError() {
    this.validationErrorSnackBar.open('The opening time must be earlier than the close time. Please try again.', 'OK', {
      duration: 3500,
    });
  }

  displaySeasonDates(SeasonID){
    this.selectedSeason = this.seasonDropDown.find(XX => XX.SeasonID === SeasonID);
    this.seasonSelected = true;
  }
}
