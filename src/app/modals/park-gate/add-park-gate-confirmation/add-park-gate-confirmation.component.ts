import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-park-gate-confirmation',
  templateUrl: './add-park-gate-confirmation.component.html',
  styleUrls: ['./add-park-gate-confirmation.component.scss']
})
export class AddParkGateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
