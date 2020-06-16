import { Component, OnInit } from '@angular/core';
import {UpdateParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-confirmation/update-park-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-park-gate-time',
  templateUrl: './update-park-gate-time.component.html',
  styleUrls: ['./update-park-gate-time.component.scss']
})
export class UpdateParkGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updateParkGateTime(){
    const confirmUpdateDialog =  this.dialog.open(UpdateParkGateTimeConfirmationComponent)
  }
}
