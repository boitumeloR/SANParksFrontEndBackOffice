import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteWildcardCategorySuccessfulComponent } from 'src/app/modals/wildcard-category/delete-wildcard-category-successful/delete-wildcard-category-successful.component';
import { DeleteWildcardCategoryUnsuccessfulComponent } from 'src/app/modals/wildcard-category/delete-wildcard-category-unsuccessful/delete-wildcard-category-unsuccessful.component';

@Component({
  selector: 'app-delete-wildcard-category',
  templateUrl: './delete-wildcard-category.component.html',
  styleUrls: ['./delete-wildcard-category.component.scss']
})
export class DeleteWildcardCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteWildcardCategory(){
    const deleteWildcardCategorySuccessfulDialog = this.dialog.open(DeleteWildcardCategorySuccessfulComponent);
  }

  unsuccessfulDeleteWildcardCategory(){
    const deleteWildcardCategoryUnsuccessfulDialog = this.dialog.open(DeleteWildcardCategoryUnsuccessfulComponent);
  }
}
