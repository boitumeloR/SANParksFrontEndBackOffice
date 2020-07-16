import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateParkGateTimeSuccessfulComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-successful/update-park-gate-time-successful.component';
import { UpdateParkGateTimeUnsuccessfulComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-unsuccessful/update-park-gate-time-unsuccessful.component';

@Component({
  selector: 'app-update-park-gate-time-confirmation',
  templateUrl: './update-park-gate-time-confirmation.component.html',
  styleUrls: ['./update-park-gate-time-confirmation.component.scss']
})
export class UpdateParkGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateParkGateTime(){
    const updateParkGateTimeSuccessfulDialog = this.dialog.open(UpdateParkGateTimeSuccessfulComponent);
  }

  unsuccessfulUpdateParkGateTime(){
    const updateParkGateTimeUnsuccessfulDialog = this.dialog.open(UpdateParkGateTimeUnsuccessfulComponent);
  }
}
