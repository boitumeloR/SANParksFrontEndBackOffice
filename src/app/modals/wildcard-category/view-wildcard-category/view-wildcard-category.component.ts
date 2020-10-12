import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: max-line-length
import {UpdateWildcardCategoryComponent} from 'src/app/modals/wildcard-category/update-wildcard-category/update-wildcard-category.component';
// tslint:disable-next-line: max-line-length
import {DeleteWildcardCategoryComponent} from 'src/app/modals/wildcard-category/delete-wildcard-category/delete-wildcard-category.component';
import {MatDialog} from '@angular/material/dialog';
import { WildcardCategory, WildcardCategoryService } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-wildcard-category',
  templateUrl:'./view-wildcard-category.component.html',
  styleUrls: ['./view-wildcard-category.component.scss']
})
export class ViewWildcardCategoryComponent implements OnInit {
  wildcardCategory;
  constructor(private dialog: MatDialog, private wildcardCategoryService: WildcardCategoryService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.wildcardCategory = JSON.parse(localStorage.getItem('wildcardCategory'));
  }

  updateWildcardCategory(){
    const updateWildcardCategoryDialog = this.dialog.open(UpdateWildcardCategoryComponent, {disableClose: true});
  }

  deleteWildcardCategory(){
    const deleteWildcardCategoryDialog = this.dialog.open(DeleteWildcardCategoryComponent);

    deleteWildcardCategoryDialog.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));
        const authenticateUser = {
            authenticateUser: user
          };
        this.wildcardCategoryService.DeleteWildcardCategory(authenticateUser, this.wildcardCategory.WildcardCategoryID,
          this.globalService.GetServer());
      }
    });
  }
}
