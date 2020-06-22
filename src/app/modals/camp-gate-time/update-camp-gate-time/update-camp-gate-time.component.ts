import { Component, OnInit } from '@angular/core';
import {UpdateCampGateTimeConfirmationComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-confirmation/update-camp-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-camp-gate-time',
  templateUrl: './update-camp-gate-time.component.html',
  styleUrls: ['./update-camp-gate-time.component.scss']
})
export class UpdateCampGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateCampGateTime(){
    const updateCampGateTimeConfirmationDialog = this.dialog.open(UpdateCampGateTimeConfirmationComponent)
  }
}
