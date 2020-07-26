import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';

@Component({
  selector: 'app-check-in-park',
  templateUrl: './check-in-park.component.html',
  styleUrls: ['./check-in-park.component.scss']
})
export class CheckInParkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
