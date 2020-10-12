import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardRateComponent } from 'src/app/modals/wildcard-rate/add-wildcard-rate/add-wildcard-rate.component';
import { ViewWildcardRateComponent } from 'src/app/modals/wildcard-rate/view-wildcard-rate/view-wildcard-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { WildcardRateService } from 'src/app/services/WildcardRate/wildcard-rate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-wildcard-rate',
  templateUrl: './wildcard-rate.component.html',
  styleUrls: ['./wildcard-rate.component.scss']
})
export class WildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog, private wildcardRateService: WildcardRateService,
              private globalService: GlobalService, private router: Router, private snackbar: MatSnackBar) { }

  displayedColumns: string[] = ['clusterName', 'categoryName', 'dateEffective', 'endDate', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.wildcardRateService.requestReferesh.subscribe(() => {this.getWildcardRate(); });
    this.getWildcardRate();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addWildcardRate(){
    const addWildcardRateDialog = this.dialog.open(AddWildcardRateComponent, {disableClose: true});
  }

  viewWildcardRate(wildcardRate){
    localStorage.setItem('wildcardRate', JSON.stringify(wildcardRate));
    const viewWildcardRateDialog = this.dialog.open(ViewWildcardRateComponent);
  }

  getWildcardRate(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.wildcardRateService.ReadWildcardRate(this.globalService.GetServer()).subscribe((result: any) => {
        this.dataSource = new MatTableDataSource(result.WildcardRates);
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
