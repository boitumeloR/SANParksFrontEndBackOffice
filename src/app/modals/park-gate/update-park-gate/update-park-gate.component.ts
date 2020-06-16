import { Component, OnInit } from '@angular/core';
import {UpdateParkGateConfirmationComponent} from 'src/app/modals/park-gate/update-park-gate-confirmation/update-park-gate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-park-gate',
  templateUrl: './update-park-gate.component.html',
  styleUrls: ['./update-park-gate.component.scss']
})
export class UpdateParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updateParkGate(){
    const confirmDialog = this.dialog.open(UpdateParkGateConfirmationComponent);
  }
}
