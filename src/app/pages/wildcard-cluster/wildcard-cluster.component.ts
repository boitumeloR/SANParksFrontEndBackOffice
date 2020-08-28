import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardClusterComponent } from 'src/app/modals/wildcard-cluster/add-wildcard-cluster/add-wildcard-cluster.component';
import { ViewWildcardClusterComponent } from 'src/app/modals/wildcard-cluster/view-wildcard-cluster/view-wildcard-cluster.component';
import {MatDialog} from '@angular/material/dialog';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';
import { GlobalService } from 'src/app/services/Global/global.service';


@Component({
  selector: 'app-wildcard-cluster',
  templateUrl: './wildcard-cluster.component.html',
  styleUrls: ['./wildcard-cluster.component.scss']
})
export class WildcardClusterComponent implements OnInit {

  constructor(private dialog: MatDialog, private wildcardClusterService: WildcardClusterService, private globalService: GlobalService) { }

  displayedColumns: string[] = ['name', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.wildcardClusterService.requestReferesh.subscribe(() => {this.getWildcardCluster(); });
    this.getWildcardCluster();
  }
  addWildcardCluster(){
    const addWildcardClusterDialog = this.dialog.open(AddWildcardClusterComponent, {disableClose: true});
  }
  viewWildcardCluster(wildcardCluster){
    localStorage.setItem('wildcardCluster', JSON.stringify(wildcardCluster));
    const viewWildcardClusterDialog = this.dialog.open(ViewWildcardClusterComponent);
  }

  getWildcardCluster(){
    this.wildcardClusterService.ReadWildcardCluster(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.WildcardClusters);
      this.dataSource.paginator = this.paginator;
    });
  }
}
