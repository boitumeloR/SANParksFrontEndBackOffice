import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardClusterComponent } from 'src/app/modals/wildcard-cluster/add-wildcard-cluster/add-wildcard-cluster.component';
import { ViewWildcardClusterComponent } from 'src/app/modals/wildcard-cluster/view-wildcard-cluster/view-wildcard-cluster.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'SANParks Cluster'},
  {name: 'Msinsi Cluster'},
  {name: 'All Parks Cluster'},
];

@Component({
  selector: 'app-wildcard-cluster',
  templateUrl: './wildcard-cluster.component.html',
  styleUrls: ['./wildcard-cluster.component.scss']
})
export class WildcardClusterComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addWildcardCluster(){
    const addWildcardClusterDialog = this.dialog.open(AddWildcardClusterComponent,{disableClose: true});
  }
  viewWildcardCluster(wildcardCluster){
    const deleteWildcardClusterDialog = this.dialog.open(ViewWildcardClusterComponent);
  }
}
