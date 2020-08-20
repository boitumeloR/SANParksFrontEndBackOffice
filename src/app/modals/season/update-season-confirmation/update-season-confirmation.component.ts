import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-season-confirmation',
  templateUrl: './update-season-confirmation.component.html',
  styleUrls: ['./update-season-confirmation.component.scss']
})
export class UpdateSeasonConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
