import { Component, OnInit } from '@angular/core';

import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-confirmation/update-park-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
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
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateParkGateTime(){
    const confirmUpdateDialog =  this.dialog.open(UpdateParkGateTimeConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }

}
