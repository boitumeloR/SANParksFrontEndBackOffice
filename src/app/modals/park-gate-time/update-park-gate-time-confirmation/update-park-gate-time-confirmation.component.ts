import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-park-gate-time-confirmation',
  templateUrl: './update-park-gate-time-confirmation.component.html',
  styleUrls: ['./update-park-gate-time-confirmation.component.scss']
})
export class UpdateParkGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
