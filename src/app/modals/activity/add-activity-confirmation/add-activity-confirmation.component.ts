import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-activity-confirmation',
  templateUrl: './add-activity-confirmation.component.html',
  styleUrls: ['./add-activity-confirmation.component.scss']
})
export class AddActivityConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
