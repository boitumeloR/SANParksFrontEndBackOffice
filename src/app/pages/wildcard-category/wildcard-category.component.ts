import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardCategoryComponent } from 'src/app/modals/wildcard-category/add-wildcard-category/add-wildcard-category.component';
import { ViewWildcardCategoryComponent } from 'src/app/modals/wildcard-category/view-wildcard-category/view-wildcard-category.component';
import {MatDialog} from '@angular/material/dialog';
import { WildcardCategoryService } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-wildcard-category',
  templateUrl: './wildcard-category.component.html',
  styleUrls: ['./wildcard-category.component.scss']
})
export class WildcardCategoryComponent implements OnInit {
  displayedColumns: string[] = ['WildcardCategoryName', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private wildcardCategoryService: WildcardCategoryService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.wildcardCategoryService.requestReferesh.subscribe(() => {this.getWildcardCategory(); });
    this.getWildcardCategory();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addWildcardCategory(){
    const addWildcardCategoryDialog = this.dialog.open(AddWildcardCategoryComponent, {disableClose: true});
  }

  viewWildcardCategory(wildcardCategory){
    localStorage.setItem('wildcardCategory', JSON.stringify(wildcardCategory));
    const viewWildcardCategoryDialog = this.dialog.open(ViewWildcardCategoryComponent);
  }
  getWildcardCategory(){
    this.wildcardCategoryService.ReadWildcardCategory(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.WildcardCategories);
      this.dataSource.paginator = this.paginator;
    });
  }
}
