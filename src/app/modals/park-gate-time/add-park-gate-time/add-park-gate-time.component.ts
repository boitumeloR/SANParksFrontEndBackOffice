import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-confirmation/add-park-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
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
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addParkGateTime(){
    const addParkGateTimeConfirmationDialog = this.dialog.open(AddParkGateTimeConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
