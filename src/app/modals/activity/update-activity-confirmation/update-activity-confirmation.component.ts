import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-activity-confirmation',
  templateUrl: './update-activity-confirmation.component.html',
  styleUrls: ['./update-activity-confirmation.component.scss']
})
export class UpdateActivityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
