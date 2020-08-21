import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-activity-type-confirmation',
  templateUrl: './add-activity-type-confirmation.component.html',
  styleUrls: ['./add-activity-type-confirmation.component.scss']
})
export class AddActivityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
