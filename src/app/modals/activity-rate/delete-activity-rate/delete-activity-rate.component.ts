import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-activity-rate',
  templateUrl: './delete-activity-rate.component.html',
  styleUrls: ['./delete-activity-rate.component.scss']
})
export class DeleteActivityRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
