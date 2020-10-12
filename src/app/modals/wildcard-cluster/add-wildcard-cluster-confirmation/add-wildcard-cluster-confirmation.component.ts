import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-wildcard-cluster-confirmation',
  templateUrl: './add-wildcard-cluster-confirmation.component.html',
  styleUrls: ['./add-wildcard-cluster-confirmation.component.scss']
})
export class AddWildcardClusterConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
