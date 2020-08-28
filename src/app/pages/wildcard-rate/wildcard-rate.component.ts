import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddWildcardRateComponent } from 'src/app/modals/wildcard-rate/add-wildcard-rate/add-wildcard-rate.component';
import { ViewWildcardRateComponent } from 'src/app/modals/wildcard-rate/view-wildcard-rate/view-wildcard-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { WildcardRateService } from 'src/app/services/WildcardRate/wildcard-rate.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-wildcard-rate',
  templateUrl: './wildcard-rate.component.html',
  styleUrls: ['./wildcard-rate.component.scss']
})
export class WildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog, private wildcardRateService: WildcardRateService,
              private globalService: GlobalService) { }

  displayedColumns: string[] = ['clusterName', 'categoryName', 'dateEffective', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.wildcardRateService.requestReferesh.subscribe(() => {this.getWildcardRate(); });
    this.getWildcardRate();
  }

  addWildcardRate(){
    const addWildcardRateDialog = this.dialog.open(AddWildcardRateComponent, {disableClose: true});
  }

  viewWildcardRate(wildcardRate){
    localStorage.setItem('wildcardRate', JSON.stringify(wildcardRate));
    const viewWildcardRateDialog = this.dialog.open(ViewWildcardRateComponent);
  }

  getWildcardRate(){
    this.wildcardRateService.ReadWildcardRate(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.WildcardRates);
      this.dataSource.paginator = this.paginator;
    });
  }
}
