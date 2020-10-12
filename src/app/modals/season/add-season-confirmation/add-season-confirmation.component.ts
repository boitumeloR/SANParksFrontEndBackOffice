import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-season-confirmation',
  templateUrl: './add-season-confirmation.component.html',
  styleUrls: ['./add-season-confirmation.component.scss']
})
export class AddSeasonConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
