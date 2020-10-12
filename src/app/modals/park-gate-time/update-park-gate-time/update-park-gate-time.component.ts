import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-confirmation/update-park-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { ParkGateTimeService, ParkGateTime } from 'src/app/services/ParkGateTime/park-gate-time.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { SeasonService } from 'src/app/services/Season/season.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { ParkGateService } from 'src/app/services/ParkGate/park-gate.service';
@Component({
  selector: 'app-update-park-gate-time',
  templateUrl: './update-park-gate-time.component.html',
  styleUrls: ['./update-park-gate-time.component.scss']
})
export class UpdateParkGateTimeComponent implements OnInit {
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

  updateParkGateTimeForm: FormGroup;
  parkGateTime: ParkGateTime;
  seasonDropDown;
  seasonSelected: boolean;
  selectedSeason;
  parkDropDown;
  parkGateDropDown;
  openTime;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateParkGateTimeComponent>, private parkGateTimeService: ParkGateTimeService,
              private globalService: GlobalService, private parkService: ParkService, private parkGateService: ParkGateService,
              private seasonService: SeasonService) { }

  ngOnInit(): void {
    this.parkGateTime = JSON.parse(localStorage.getItem('parkGateTime'));

    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;

      this.seasonService.ReadSeason(this.globalService.GetServer()).subscribe((resultSeason: any) => {
        this.seasonDropDown = resultSeason.Seasons;
        this.displaySeasonDates(this.parkGateTime.SeasonID);
      });
    });

    this.updateParkGateTimeForm = this.formBuilder.group({
      park: [this.parkGateTime.ParkName, Validators.required],
      parkGate : [this.parkGateTime.ParkGateName, Validators.required],
      season : [this.parkGateTime.SeasonID, Validators.required],
      gateOpeningTime : [this.parkGateTime.ParkOpenTime, Validators.required],
      gateClosingTime: [this.parkGateTime.ParkCloseTime, Validators.required]
    });
  }

  updateParkGateTime(){
    if (this.updateParkGateTimeForm.invalid){
      this.displayValidationError();
    }
    else if (this.updateParkGateTimeForm.get('gateClosingTime').value <= this.updateParkGateTimeForm.get('gateOpeningTime').value){
      this.displayTimeError();
    }
    else{
      this.dialogRef.close();
      const confirmUpdateDialog =  this.dialog.open(UpdateParkGateTimeConfirmationComponent);

      confirmUpdateDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const parkGateTime = {
            PTimeID: this.parkGateTime.PTimeID,
            SeasonID: this.updateParkGateTimeForm.get('season').value,
            ParkOpenTime: this.updateParkGateTimeForm.get('gateOpeningTime').value,
            ParkCloseTime: this.updateParkGateTimeForm.get('gateClosingTime').value,
            authenticateUser: user
          };

          this.parkGateTimeService.UpdateParkGateTime(parkGateTime, this.globalService.GetServer());
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

  getParkGates(parkID){
    this.parkGateService.GetParkGatesForAPark(parkID, this.globalService.GetServer()).subscribe((result: any) => {
      this.parkGateDropDown = result.ParkGates;
    });
  }

  displaySeasonDates(SeasonID){
    this.selectedSeason = this.seasonDropDown.find(XX => XX.SeasonID === SeasonID);
    this.seasonSelected = true;
  }
}
