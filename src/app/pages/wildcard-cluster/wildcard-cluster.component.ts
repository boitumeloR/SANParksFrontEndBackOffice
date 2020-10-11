import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardClusterComponent } from 'src/app/modals/wildcard-cluster/add-wildcard-cluster/add-wildcard-cluster.component';
import { ViewWildcardClusterComponent } from 'src/app/modals/wildcard-cluster/view-wildcard-cluster/view-wildcard-cluster.component';
import {MatDialog} from '@angular/material/dialog';
import { WildcardClusterService } from 'src/app/services/WildcardCluster/wildcard-cluster.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wildcard-cluster',
  templateUrl: './wildcard-cluster.component.html',
  styleUrls: ['./wildcard-cluster.component.scss']
})
export class WildcardClusterComponent implements OnInit {

  constructor(private dialog: MatDialog, private wildcardClusterService: WildcardClusterService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar) { }

  displayedColumns: string[] = ['name', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.wildcardClusterService.requestReferesh.subscribe(() => {this.getWildcardCluster(); });
    this.getWildcardCluster();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addWildcardCluster(){
    const addWildcardClusterDialog = this.dialog.open(AddWildcardClusterComponent, {disableClose: true});
  }

  viewWildcardCluster(wildcardCluster){
    localStorage.setItem('wildcardCluster', JSON.stringify(wildcardCluster));
    const viewWildcardClusterDialog = this.dialog.open(ViewWildcardClusterComponent);
  }

  getWildcardCluster(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.wildcardClusterService.ReadWildcardCluster(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.WildcardClusters);
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
