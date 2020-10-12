import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-amentity-type-confirmation',
  templateUrl: './update-amentity-type-confirmation.component.html',
  styleUrls: ['./update-amentity-type-confirmation.component.scss']
})
export class UpdateAmentityTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
