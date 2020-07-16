import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCampGateTimeSuccessfulComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-successful/add-camp-gate-time-successful.component';
import {AddCampGateTimeUnsuccessfulComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-unsuccessful/add-camp-gate-time-unsuccessful.component';

@Component({
  selector: 'app-add-camp-gate-time-confirmation',
  templateUrl: './add-camp-gate-time-confirmation.component.html',
  styleUrls: ['./add-camp-gate-time-confirmation.component.scss']
})
export class AddCampGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddCampGateTime(){
    const addCampGateTimeSuccessfulDialog = this.dialog.open(AddCampGateTimeSuccessfulComponent);
  }

  unsuccessfulAddCampGateTime(){
    const addCampGateTimeUnsuccessfulDialog = this.dialog.open(AddCampGateTimeUnsuccessfulComponent);
  }
}
