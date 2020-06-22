import { Component, OnInit } from '@angular/core';
import {AddCampGateTimeConfirmationComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-confirmation/add-camp-gate-time-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-add-camp-gate-time',
  templateUrl: './add-camp-gate-time.component.html',
  styleUrls: ['./add-camp-gate-time.component.scss']
})
export class AddCampGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addCampGateTime(){
    const addCampGateTimeConfirmation = this.dialog.open(AddCampGateTimeConfirmationComponent);
  }
}
