import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-amentity-type-confirmation',
  templateUrl: './add-amentity-type-confirmation.component.html',
  styleUrls: ['./add-amentity-type-confirmation.component.scss']
})
export class AddAmentityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
