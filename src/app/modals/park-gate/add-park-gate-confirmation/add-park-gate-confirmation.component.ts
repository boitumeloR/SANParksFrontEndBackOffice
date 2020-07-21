import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddParkGateSuccessfulComponent} from 'src/app/modals/park-gate/add-park-gate-successful/add-park-gate-successful.component';
import {AddParkGateUnsuccessfulComponent} from 'src/app/modals/park-gate/add-park-gate-unsuccessful/add-park-gate-unsuccessful.component';

@Component({
  selector: 'app-add-park-gate-confirmation',
  templateUrl: './add-park-gate-confirmation.component.html',
  styleUrls: ['./add-park-gate-confirmation.component.scss']
})
export class AddParkGateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddParkGate(){
    const addParkGateSuccessfulDialog = this.dialog.open(AddParkGateSuccessfulComponent);
  }

  unsuccessfulAddParkGate(){
    const addParkGateUnsuccessfulDialog = this.dialog.open(AddParkGateUnsuccessfulComponent);
  }
}
