import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-check-in-park',
  templateUrl: './check-in-park.component.html',
  styleUrls: ['./check-in-park.component.scss']
})
export class CheckInParkComponent implements OnInit {

  constructor(private dialog: MatDialog, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Check-In Park');
  }

}
