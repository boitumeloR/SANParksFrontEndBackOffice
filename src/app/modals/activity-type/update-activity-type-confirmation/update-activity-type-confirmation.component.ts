import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-activity-type-confirmation',
  templateUrl: './update-activity-type-confirmation.component.html',
  styleUrls: ['./update-activity-type-confirmation.component.scss']
})
export class UpdateActivityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
