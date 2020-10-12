import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-camp-gate-time-confirmation',
  templateUrl: './update-camp-gate-time-confirmation.component.html',
  styleUrls: ['./update-camp-gate-time-confirmation.component.scss']
})
export class UpdateCampGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
