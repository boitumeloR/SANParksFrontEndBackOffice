import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkGateConfirmationComponent} from 'src/app/modals/park-gate/add-park-gate-confirmation/add-park-gate-confirmation.component';
@Component({
  selector: 'app-add-park-gate',
  templateUrl: './add-park-gate.component.html',
  styleUrls: ['./add-park-gate.component.scss']
})
export class AddParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  addParkGate(){
    const addParkGateConfirmationDialog = this.dialog.open(AddParkGateConfirmationComponent);
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
  }
}
