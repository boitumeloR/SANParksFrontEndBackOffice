import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-add-wildcard-rate-confirmation',
  templateUrl: './add-wildcard-rate-confirmation.component.html',
  styleUrls: ['./add-wildcard-rate-confirmation.component.scss']
})
export class AddWildcardRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
