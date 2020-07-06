import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DelteParkGateTimeSuccessfulComponent } from 'src/app/modals/park-gate-time/delte-park-gate-time-successful/delte-park-gate-time-successful.component';

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
}
