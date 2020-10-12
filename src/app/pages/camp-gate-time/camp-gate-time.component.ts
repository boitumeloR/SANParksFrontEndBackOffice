import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddCampGateTimeComponent } from 'src/app/modals/camp-gate-time/add-camp-gate-time/add-camp-gate-time.component';
import { ViewCampGateTimeComponent } from 'src/app/modals/camp-gate-time/view-camp-gate-time/view-camp-gate-time.component';
import {MatDialog} from '@angular/material/dialog';
import { CampGateTimeService } from 'src/app/services/CampGateTime/camp-gate-time.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-camp-gate-time',
  templateUrl: './camp-gate-time.component.html',
  styleUrls: ['./camp-gate-time.component.scss']
})
export class CampGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog, private campGateTimeService: CampGateTimeService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar) { }

  displayedColumns: string[] = ['name', 'season', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.campGateTimeService.requestReferesh.subscribe(() => {this.getCampGateTime(); });
    this.getCampGateTime();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addCampGateTime(){
    const addCampGateTimeDialog =  this.dialog.open(AddCampGateTimeComponent, {disableClose: true});
  }

  viewCampGateTime(gateTime){
    localStorage.setItem('campGateTime', JSON.stringify(gateTime));
    const viewCampGateTimeDialog =  this.dialog.open(ViewCampGateTimeComponent);
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
 }

  getCampGateTime(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.campGateTimeService.readCampgateTime(this.globalService.GetServer()).subscribe((result: any) => {     
      this.dataSource = new MatTableDataSource(result.CampGateTimes);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
}
