import { Component, OnInit } from '@angular/core';
import {AddParkGateTimeConfirmationComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-confirmation/add-park-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-add-park-gate-time',
  templateUrl: './add-park-gate-time.component.html',
  styleUrls: ['./add-park-gate-time.component.scss']
})
export class AddParkGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addParkGateTime(){
    const addParkGateTimeConfirmationDialog = this.dialog.open(AddParkGateTimeConfirmationComponent);
  }
}
