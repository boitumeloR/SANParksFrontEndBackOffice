import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee/add-daily-conservation-fee.component';
import { ViewDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/view-daily-conservation-fee/view-daily-conservation-fee.component';
import {MatDialog} from '@angular/material/dialog';
import { DailyConservationFeeService } from 'src/app/services/DailyConservationFee/daily-conservation-fee.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
@Component({
  selector: 'app-daily-conservation-fee',
  templateUrl: './daily-conservation-fee.component.html',
  styleUrls: ['./daily-conservation-fee.component.scss']
})
export class DailyConservationFeeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'dateEffective', 'endDate', 'region', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private dailyConservationFeeService: DailyConservationFeeService,
              private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.dailyConservationFeeService.requestReferesh.subscribe(() => {this.getDailyConservationFee(); });
    this.getDailyConservationFee();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  viewDailyConservationFee(dailyConservationFee){
    localStorage.setItem('dailyConservationFee', JSON.stringify(dailyConservationFee));
    const viewDailyConservationFeeDialog = this.dialog.open(ViewDailyConservationFeeComponent);
  }

  addDailyConservationFee(){
    const addDailyConservationFeeDialog = this.dialog.open(AddDailyConservationFeeComponent);
  }

  getDailyConservationFee(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.dailyConservationFeeService.ReadDailyConservationFee(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.DaliyConservationFees);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
        });
      }
    );
  }
}
