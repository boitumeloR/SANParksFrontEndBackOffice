import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddCampGateTimeComponent } from 'src/app/modals/camp-gate-time/add-camp-gate-time/add-camp-gate-time.component';
import { ViewCampGateTimeComponent } from 'src/app/modals/camp-gate-time/view-camp-gate-time/view-camp-gate-time.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  season: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Matyholweni',season: 'High'},
  {name: 'Lower Sabie', season: 'Shoulder'},
  {name: 'Sirheni', season: 'Low'},
];

@Component({
  selector: 'app-camp-gate-time',
  templateUrl: './camp-gate-time.component.html',
  styleUrls: ['./camp-gate-time.component.scss']
})
export class CampGateTimeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name','season','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
  }

  addCampGateTime(){
    const addCampGateTimeDialog =  this.dialog.open(AddCampGateTimeComponent,{disableClose: true});
  }

  viewCampGateTime(gateTime){
    const viewCampGateTimeDialog =  this.dialog.open(ViewCampGateTimeComponent);
  }
}
