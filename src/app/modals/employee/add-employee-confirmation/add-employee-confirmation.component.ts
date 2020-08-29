import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee-confirmation',
  templateUrl: './add-employee-confirmation.component.html',
  styleUrls: ['./add-employee-confirmation.component.scss']
})
export class AddEmployeeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
