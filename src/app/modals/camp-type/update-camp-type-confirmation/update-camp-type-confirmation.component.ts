import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-camp-type-confirmation',
  templateUrl: './update-camp-type-confirmation.component.html',
  styleUrls: ['./update-camp-type-confirmation.component.scss']
})
export class UpdateCampTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
