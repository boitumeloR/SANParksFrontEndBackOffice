import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateWildcardCategorySuccessfulComponent} from 'src/app/modals/wildcard-category/update-wildcard-category-successful/update-wildcard-category-successful.component';
import {UpdateWildcardCategoryUnsuccessfulComponent} from 'src/app/modals/wildcard-category/update-wildcard-category-unsuccessful/update-wildcard-category-unsuccessful.component';

@Component({
  selector: 'app-update-wildcard-category-confirmation',
  templateUrl: './update-wildcard-category-confirmation.component.html',
  styleUrls: ['./update-wildcard-category-confirmation.component.scss']
})
export class UpdateWildcardCategoryConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateWildcardCategory(){
    const updateWildcardCategorySuccessfulDialog = this.dialog.open(UpdateWildcardCategorySuccessfulComponent);
  }

  unsuccessfulUpdateWildcardCategory(){
    const updateWildcardCategoryUnsuccessfulDialog = this.dialog.open(UpdateWildcardCategoryUnsuccessfulComponent);
  }
}
