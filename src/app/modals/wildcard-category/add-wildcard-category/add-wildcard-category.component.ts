import { Component, OnInit } from '@angular/core';
import {AddWildcardCategoryConfirmationComponent} from 'src/app/modals/wildcard-category/add-wildcard-category-confirmation/add-wildcard-category-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-add-wildcard-category',
  templateUrl: './add-wildcard-category.component.html',
  styleUrls: ['./add-wildcard-category.component.scss']
})
export class AddWildcardCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addWildcardCategory(){
    const addWildcardCategoryConfirmationDialog =  this.dialog.open(AddWildcardCategoryConfirmationComponent);
  }
}
