import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkGateTimeComponent } from 'src/app/modals/park-gate-time/add-park-gate-time/add-park-gate-time.component';
import { ViewParkGateTimeComponent } from 'src/app/modals/park-gate-time/view-park-gate-time/view-park-gate-time.component';
import {MatDialog} from '@angular/material/dialog';
import { ParkGateTimeService } from 'src/app/services/ParkGateTime/park-gate-time.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-park-gate-time',
  templateUrl: './park-gate-time.component.html',
  styleUrls: ['./park-gate-time.component.scss']
})
export class ParkGateTimeComponent implements OnInit {
  dataSource;
  filter;
  constructor(private dialog: MatDialog, private parkGateTimeService: ParkGateTimeService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar) { }

  displayedColumns: string[] = ['ParkGateName', 'SeasonName', 'view'];


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.parkGateTimeService.requestReferesh.subscribe(() => {this.getParkGateTime(); });
    this.getParkGateTime();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addParkGateTime(){
    const addParkGateTimeDialog =  this.dialog.open(AddParkGateTimeComponent, {disableClose: true});
  }

  viewParkGateTime(gateTime){
    localStorage.setItem('parkGateTime', JSON.stringify(gateTime));
    const viewParkGateTimeDialog =  this.dialog.open(ViewParkGateTimeComponent);
  }

  getParkGateTime(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.parkGateTimeService.ReadParkGateTime(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.ParkGateTime);
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
