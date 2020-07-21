import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddParkGateTimeSuccessfulComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-successful/add-park-gate-time-successful.component';
import {AddParkGateTimeUnsuccessfulComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-unsuccessful/add-park-gate-time-unsuccessful.component';

@Component({
  selector: 'app-add-park-gate-time-confirmation',
  templateUrl: './add-park-gate-time-confirmation.component.html',
  styleUrls: ['./add-park-gate-time-confirmation.component.scss']
})
export class AddParkGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddParkGateTime(){
    const addParkGateTimeSuccessfulDialog = this.dialog.open(AddParkGateTimeSuccessfulComponent);
  }

  unsuccessfulAddParkGateTime(){
    const addParkGateTimeUnsuccessfulDialog = this.dialog.open(AddParkGateTimeUnsuccessfulComponent);
  }
}
