import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-park-gate-time-confirmation',
  templateUrl: './add-park-gate-time-confirmation.component.html',
  styleUrls: ['./add-park-gate-time-confirmation.component.scss']
})
export class AddParkGateTimeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
