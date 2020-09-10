import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-confirmation/add-park-gate-time-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkGateService } from 'src/app/services/ParkGate/park-gate.service';
import { ParkGateTime, ParkGateTimeService } from 'src/app/services/ParkGateTime/park-gate-time.service';
import { SeasonService, Season } from 'src/app/services/Season/season.service';

@Component({
  selector: 'app-add-park-gate-time',
  templateUrl: './add-park-gate-time.component.html',
  styleUrls: ['./add-park-gate-time.component.scss']
})
export class AddParkGateTimeComponent implements OnInit {
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

  addParkGateTimeForm: FormGroup;
  parkDropDown;
  parkGateDropDown;
  seasonDropDown;
  selectedSeason;
  seasonSelected: boolean;
  newParkGateTime: ParkGateTime;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddParkGateTimeComponent>, private parkService: ParkService,
              private globalService: GlobalService, private parkGateService: ParkGateService,
              private seasonService: SeasonService, private parkGateTimeService: ParkGateTimeService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));

      this.seasonService.ReadSeason(this.globalService.GetServer()).subscribe((resultSeason: any) => {
          this.seasonDropDown = resultSeason.Seasons;
          localStorage.setItem('user', JSON.stringify(resultSeason.user));
        });
    });

    this.seasonSelected = false;
    this.addParkGateTimeForm = this.formBuilder.group({
      park: ['', Validators.required],
      parkGate : ['', Validators.required],
      season : ['', Validators.required],
      gateOpeningTime : ['', Validators.required],
      gateClosingTime: ['', Validators.required]
    });
  }

  addParkGateTime(){
    if (this.addParkGateTimeForm.invalid){
      this.displayValidationError();
    }
    else if (this.addParkGateTimeForm.get('gateClosingTime').value <= this.addParkGateTimeForm.get('gateOpeningTime').value){
      this.displayTimeError();
    }
    else{
      this.dialogRef.close();
      const addParkGateTimeConfirmationDialog = this.dialog.open(AddParkGateTimeConfirmationComponent);
      addParkGateTimeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));
          const newParkGateTime = {
            ParkGateID: this.addParkGateTimeForm.get('parkGate').value,
            SeasonID: this.addParkGateTimeForm.get('season').value,
            ParkOpenTime: this.addParkGateTimeForm.get('gateOpeningTime').value,
            ParkCloseTime: this.addParkGateTimeForm.get('gateClosingTime').value,
            authenticateUser: user
          };

          this.parkGateTimeService.CreateParkGateTime(newParkGateTime, this.globalService.GetServer());
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
    const user = JSON.parse(localStorage.getItem('user'));
  }
}
