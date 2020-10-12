import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-wildcard-rate',
  templateUrl: './delete-wildcard-rate.component.html',
  styleUrls: ['./delete-wildcard-rate.component.scss']
})
export class DeleteWildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
