import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddCampGateTimeConfirmationComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-confirmation/add-camp-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { GlobalService } from 'src/app/services/Global/global.service';
import { CampGateTimeService } from 'src/app/services/CampGateTime/camp-gate-time.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { SeasonService } from 'src/app/services/Season/season.service';
import { CampService } from 'src/app/services/Camp/camp.service';

@Component({
  selector: 'app-add-camp-gate-time',
  templateUrl: './add-camp-gate-time.component.html',
  styleUrls: ['./add-camp-gate-time.component.scss']
})
export class AddCampGateTimeComponent implements OnInit {
  addCampGateTimeForm: FormGroup;
  parkDropDown;
  seasonDropDown;
  campDropDown;
  selectedSeason;
  seasonSelected: boolean;

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

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddCampGateTimeComponent>, private globalService: GlobalService,
              private campGateTimeService: CampGateTimeService, private parkService: ParkService, private seasonService: SeasonService,
              private campService: CampService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
    });

    this.seasonService.ReadSeason(this.globalService.GetServer()).subscribe((result: any) => {
      this.seasonDropDown = result.Seasons;
    });

    this.addCampGateTimeForm = this.formBuilder.group({
      park: ['', Validators.required],
      camp : ['', Validators.required],
      season : ['', Validators.required],
      openTime : ['', Validators.required],
      closeTime: ['', Validators.required]
    });
  }

  addCampGateTime(){
    if (this.addCampGateTimeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addCampGateTimeConfirmation = this.dialog.open(AddCampGateTimeConfirmationComponent);

      addCampGateTimeConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const newCampGateTime = {
            CampID: this.addCampGateTimeForm.get('camp').value,
            SeasonID: this.addCampGateTimeForm.get('season').value,
            CampOpenTime: this.addCampGateTimeForm.get('openTime').value,
            CampCloseTime: this.addCampGateTimeForm.get('closeTime').value,
          };

          this.campGateTimeService.createCampGateTime(newCampGateTime, this.globalService.GetServer());
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

  displaySeasonDates(SeasonID){
    this.selectedSeason = this.seasonDropDown.find(XX => XX.SeasonID === SeasonID);
    this.seasonSelected = true;
  }
}
