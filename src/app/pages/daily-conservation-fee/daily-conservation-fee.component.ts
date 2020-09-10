import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee/add-daily-conservation-fee.component';
import { ViewDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/view-daily-conservation-fee/view-daily-conservation-fee.component';
import {MatDialog} from '@angular/material/dialog';
import { DailyConservationFeeService } from 'src/app/services/DailyConservationFee/daily-conservation-fee.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';

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
    this.dailyConservationFeeService.ReadDailyConservationFee(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        this.dataSource = new MatTableDataSource(result.DaliyConservationFees);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem('user', JSON.stringify(result.user));
      }
    });
  }
}
