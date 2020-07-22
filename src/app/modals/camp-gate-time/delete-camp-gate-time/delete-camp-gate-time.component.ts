import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteCampGateTimeSuccessfulComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time-successful/delete-camp-gate-time-successful.component';
import { DeleteCampGateTimeUnsuccessfulComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time-unsuccessful/delete-camp-gate-time-unsuccessful.component';

@Component({
  selector: 'app-delete-camp-gate-time',
  templateUrl: './delete-camp-gate-time.component.html',
  styleUrls: ['./delete-camp-gate-time.component.scss']
})
export class DeleteCampGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteCampGateTime(){
    const deleteCampGateTimeSuccessfulDialog = this.dialog.open(DeleteCampGateTimeSuccessfulComponent);
  }

  unsuccessfulDeleteCampGateTime(){
    const deleteCampGateTimeUnsuccessfulDialog = this.dialog.open(DeleteCampGateTimeUnsuccessfulComponent);
  }
}
