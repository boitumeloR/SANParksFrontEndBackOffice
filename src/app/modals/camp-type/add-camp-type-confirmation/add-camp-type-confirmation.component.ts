import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-camp-type-confirmation',
  templateUrl: './add-camp-type-confirmation.component.html',
  styleUrls: ['./add-camp-type-confirmation.component.scss']
})
export class AddCampTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
