import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddWildcardCategorySuccessfulComponent} from 'src/app/modals/wildcard-category/add-wildcard-category-successful/add-wildcard-category-successful.component';
import {AddWildcardCategoryUnsuccessfulComponent} from 'src/app/modals/wildcard-category/add-wildcard-category-unsuccessful/add-wildcard-category-unsuccessful.component';

@Component({
  selector: 'app-add-wildcard-category-confirmation',
  templateUrl: './add-wildcard-category-confirmation.component.html',
  styleUrls: ['./add-wildcard-category-confirmation.component.scss']
})
export class AddWildcardCategoryConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddWildcardCategory(){
    const addWildcardCategorySuccessfulDialog = this.dialog.open(AddWildcardCategorySuccessfulComponent);
  }

  unsuccessfulAddWildcardCategory(){
    const addWildcardCategoryUnsuccessfulDialog = this.dialog.open(AddWildcardCategoryUnsuccessfulComponent);
  }
}
