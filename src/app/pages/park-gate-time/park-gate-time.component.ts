import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkGateTimeComponent } from 'src/app/modals/park-gate-time/add-park-gate-time/add-park-gate-time.component';
import { ViewParkGateTimeComponent } from 'src/app/modals/park-gate-time/view-park-gate-time/view-park-gate-time.component';
import {MatDialog} from '@angular/material/dialog';
import { ParkGateTimeService } from 'src/app/services/ParkGateTime/park-gate-time.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-park-gate-time',
  templateUrl: './park-gate-time.component.html',
  styleUrls: ['./park-gate-time.component.scss']
})
export class ParkGateTimeComponent implements OnInit {
  dataSource;
  constructor(private dialog: MatDialog, private parkGateTimeService: ParkGateTimeService, private globalService: GlobalService) { }

  displayedColumns: string[] = ['ParkGateName', 'SeasonName', 'view'];
 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.parkGateTimeService.requestReferesh.subscribe(() => {this.getParkGateTime(); });
    this.getParkGateTime();
  }
  addParkGateTime(){
    const addParkGateTimeDialog =  this.dialog.open(AddParkGateTimeComponent, {disableClose: true});
  }

  viewParkGateTime(gateTime){
    localStorage.setItem('parkGateTime', JSON.stringify(gateTime));
    const viewParkGateTimeDialog =  this.dialog.open(ViewParkGateTimeComponent);
  }

  getParkGateTime(){
    this.parkGateTimeService.ReadParkGateTime(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.ParkGateTime);
      this.dataSource.paginator = this.paginator;
    });
  }
}
