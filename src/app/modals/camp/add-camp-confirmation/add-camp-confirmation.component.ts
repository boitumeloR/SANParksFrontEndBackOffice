import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-camp-confirmation',
  templateUrl: './add-camp-confirmation.component.html',
  styleUrls: ['./add-camp-confirmation.component.scss']
})
export class AddCampConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
