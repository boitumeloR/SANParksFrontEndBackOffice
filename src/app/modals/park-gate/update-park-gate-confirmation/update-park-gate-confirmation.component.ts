import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateParkGateSuccessfulComponent} from 'src/app/modals/park-gate/update-park-gate-successful/update-park-gate-successful.component';
import {UpdateParkGateUnsuccessfulComponent} from 'src/app/modals/park-gate/update-park-gate-unsuccessful/update-park-gate-unsuccessful.component';

@Component({
  selector: 'app-update-park-gate-confirmation',
  templateUrl: './update-park-gate-confirmation.component.html',
  styleUrls: ['./update-park-gate-confirmation.component.scss']
})
export class UpdateParkGateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateParkGate(){
    const updateParkGateSuccessfulDialog = this.dialog.open(UpdateParkGateSuccessfulComponent);
  }

  unsuccessfulUpdateParkGate(){
    const updateParkGateUnsuccessfulDialog = this.dialog.open(UpdateParkGateUnsuccessfulComponent);
  }
}
