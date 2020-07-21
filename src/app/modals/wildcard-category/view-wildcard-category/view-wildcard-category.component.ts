import { Component, OnInit } from '@angular/core';
import {UpdateWildcardCategoryComponent} from 'src/app/modals/wildcard-category/update-wildcard-category/update-wildcard-category.component';
import {DeleteWildcardCategoryComponent} from 'src/app/modals/wildcard-category/delete-wildcard-category/delete-wildcard-category.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-view-wildcard-category',
  templateUrl: './view-wildcard-category.component.html',
  styleUrls: ['./view-wildcard-category.component.scss']
})
export class ViewWildcardCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateWildcardCategory(){
    const updateWildcardCategoryDialog = this.dialog.open(UpdateWildcardCategoryComponent,{disableClose: true});
  }

  deleteWildcardCategory(){
    const deleteWildcardCategoryDialog = this.dialog.open(DeleteWildcardCategoryComponent);
  }
}
