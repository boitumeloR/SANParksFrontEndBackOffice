import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-update-wildcard-cluster-confirmation',
  templateUrl: './update-wildcard-cluster-confirmation.component.html',
  styleUrls: ['./update-wildcard-cluster-confirmation.component.scss']
})
export class UpdateWildcardClusterConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
