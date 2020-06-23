import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardRateComponent } from 'src/app/modals/wildcard-rate/add-wildcard-rate/add-wildcard-rate.component';
import { ViewWildcardRateComponent } from 'src/app/modals/wildcard-rate/view-wildcard-rate/view-wildcard-rate.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  clusterName: string;
  categoryName: string;
  dateEffective: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  { clusterName: 'SANParks Cluster', categoryName: 'Family', dateEffective: '03/06/2020'},
  {clusterName: 'Msinsi Cluster', categoryName:'Individual', dateEffective: '01/02/2019'},
  {clusterName: 'All Parks Cluster', categoryName: 'Couple', dateEffective: '30/06/2020'},
];
@Component({
  selector: 'app-wildcard-rate',
  templateUrl: './wildcard-rate.component.html',
  styleUrls: ['./wildcard-rate.component.scss']
})
export class WildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['clusterName','categoryName','dateEffective','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addWildcardRate(){
    const addWildcardRateDialog = this.dialog.open(AddWildcardRateComponent,{disableClose: true});
  }

  viewWildcardRate(wildcardRate){
    const viewWildcardRateDialog = this.dialog.open(ViewWildcardRateComponent);
  }
}
