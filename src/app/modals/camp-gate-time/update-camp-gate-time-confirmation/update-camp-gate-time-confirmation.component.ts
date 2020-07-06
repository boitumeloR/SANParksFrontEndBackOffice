import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateCampGateTimeSuccessfulComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-successful/update-camp-gate-time-successful.component';
@Component({
  selector: 'app-update-camp-gate-time-confirmation',
  templateUrl: './update-camp-gate-time-confirmation.component.html',
  styleUrls: ['./update-camp-gate-time-confirmation.component.scss']
})
export class UpdateCampGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateCampGateTime(){
    const updateCampGateTimeSuccessfulDialog = this.dialog.open(UpdateCampGateTimeSuccessfulComponent);
  }
}
