import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardCategoryComponent } from 'src/app/modals/wildcard-category/add-wildcard-category/add-wildcard-category.component';
import { ViewWildcardCategoryComponent } from 'src/app/modals/wildcard-category/view-wildcard-category/view-wildcard-category.component';
import {MatDialog} from '@angular/material/dialog';
import { WildcardCategoryService } from 'src/app/services/WildcardCategory/wildcard-category.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private dialog: MatDialog, private wildcardCategoryService: WildcardCategoryService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.wildcardCategoryService.requestReferesh.subscribe(() => {this.getWildcardCategory(); });
    this.getWildcardCategory();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
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
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.wildcardCategoryService.ReadWildcardCategory(this.globalService.GetServer()).subscribe((result: any) => {
        this.dataSource = new MatTableDataSource(result.WildcardCategories);
        this.dataSource.paginator = this.paginator;
        displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    }
  );
  }
}
