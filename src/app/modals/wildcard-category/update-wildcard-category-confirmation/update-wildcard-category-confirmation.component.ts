import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-wildcard-category-confirmation',
  templateUrl: './update-wildcard-category-confirmation.component.html',
  styleUrls: ['./update-wildcard-category-confirmation.component.scss']
})
export class UpdateWildcardCategoryConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
