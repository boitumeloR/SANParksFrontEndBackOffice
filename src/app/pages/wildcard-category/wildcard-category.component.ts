import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardCategoryComponent } from 'src/app/modals/wildcard-category/add-wildcard-category/add-wildcard-category.component';
import { ViewWildcardCategoryComponent } from 'src/app/modals/wildcard-category/view-wildcard-category/view-wildcard-category.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Individual'},
  {name: 'Couple'},
  {name: 'Family'},
];

@Component({
  selector: 'app-wildcard-category',
  templateUrl: './wildcard-category.component.html',
  styleUrls: ['./wildcard-category.component.scss']
})
export class WildcardCategoryComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addWildcardCategory(){
    const addWildcardCategoryDialog = this.dialog.open(AddWildcardCategoryComponent,{disableClose: true})
  }
  
  viewWildcardCategory(wildcardCategory){
    const viewWildcardCategoryDialog = this.dialog.open(ViewWildcardCategoryComponent)
  }
}
