import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-activity-slot-confirmation',
  templateUrl: './add-activity-slot-confirmation.component.html',
  styleUrls: ['./add-activity-slot-confirmation.component.scss']
})
export class AddActivitySlotConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
