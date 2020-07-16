import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DelteParkGateTimeSuccessfulComponent } from 'src/app/modals/park-gate-time/delte-park-gate-time-successful/delte-park-gate-time-successful.component';
import { DeleteParkGateTimeUnsuccessfulComponent } from 'src/app/modals/park-gate-time/delete-park-gate-time-unsuccessful/delete-park-gate-time-unsuccessful.component';

@Component({
  selector: 'app-delete-park-gate-time',
  templateUrl: './delete-park-gate-time.component.html',
  styleUrls: ['./delete-park-gate-time.component.scss']
})
export class DeleteParkGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteParkGateTime(){
    const deleteParkGateTimeSuccessfulDialog = this.dialog.open(DelteParkGateTimeSuccessfulComponent);
  }

  unsuccessfulDeleteParkGateTime(){
    const deleteParkGateTimeUnsuccessfulDialog = this.dialog.open(DeleteParkGateTimeUnsuccessfulComponent);
  }
}
