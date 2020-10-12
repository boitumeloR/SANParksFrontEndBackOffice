import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-park-gate-confirmation',
  templateUrl: './update-park-gate-confirmation.component.html',
  styleUrls: ['./update-park-gate-confirmation.component.scss']
})
export class UpdateParkGateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
