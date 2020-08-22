import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-add-wildcard-category-confirmation',
  templateUrl: './add-wildcard-category-confirmation.component.html',
  styleUrls: ['./add-wildcard-category-confirmation.component.scss']
})
export class AddWildcardCategoryConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
