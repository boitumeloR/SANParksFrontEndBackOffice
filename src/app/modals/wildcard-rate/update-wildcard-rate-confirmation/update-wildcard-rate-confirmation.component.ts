import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-update-wildcard-rate-confirmation',
  templateUrl: './update-wildcard-rate-confirmation.component.html',
  styleUrls: ['./update-wildcard-rate-confirmation.component.scss']
})
export class UpdateWildcardRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
