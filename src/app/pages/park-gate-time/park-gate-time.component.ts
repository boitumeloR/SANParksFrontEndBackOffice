import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkGateTimeComponent } from 'src/app/modals/park-gate-time/add-park-gate-time/add-park-gate-time.component';
import { ViewParkGateTimeComponent } from 'src/app/modals/park-gate-time/view-park-gate-time/view-park-gate-time.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  season: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Orpen Gate',season: 'High'},
  {name: 'Phalaborwa Gate', season: 'Shoulder'},
  {name: 'Malelane Gate', season: 'Low'},
];
@Component({
  selector: 'app-park-gate-time',
  templateUrl: './park-gate-time.component.html',
  styleUrls: ['./park-gate-time.component.scss']
})
export class ParkGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name','season','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  addParkGateTime(){
    const addParkGateTimeDialog =  this.dialog.open(AddParkGateTimeComponent,{disableClose: true});

    
    addParkGateTimeDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  viewParkGateTime(gateTime){
    const viewParkGateTimeDialog =  this.dialog.open(ViewParkGateTimeComponent);
  }
}
