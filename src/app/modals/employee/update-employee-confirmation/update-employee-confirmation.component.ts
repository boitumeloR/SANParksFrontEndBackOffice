import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-employee-confirmation',
  templateUrl: './update-employee-confirmation.component.html',
  styleUrls: ['./update-employee-confirmation.component.scss']
})
export class UpdateEmployeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
