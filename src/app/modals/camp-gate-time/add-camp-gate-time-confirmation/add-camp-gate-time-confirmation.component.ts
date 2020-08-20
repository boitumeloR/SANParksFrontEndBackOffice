import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-camp-gate-time-confirmation',
  templateUrl: './add-camp-gate-time-confirmation.component.html',
  styleUrls: ['./add-camp-gate-time-confirmation.component.scss']
})
export class AddCampGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
