import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-camp-confirmation',
  templateUrl: './update-camp-confirmation.component.html',
  styleUrls: ['./update-camp-confirmation.component.scss']
})
export class UpdateCampConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
