import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee/add-daily-conservation-fee.component';
import { ViewDailyConservationFeeComponent } from 'src/app/modals/daily-conservation-fee/view-daily-conservation-fee/view-daily-conservation-fee.component';
import {MatDialog} from '@angular/material/dialog';
export interface PeriodicElement {
  name: string;
  dateEffective: string;
  region: string

}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Agulhas National Park',dateEffective: "01/01/2020",region: "Domestic"},
  {name: 'Agulhas National Park', dateEffective: '01/03/2019',region: "SADC"},
  {name: 'Agulhas National Park', dateEffective: '01/01/2018',region: "International"},
];

@Component({
  selector: 'app-daily-conservation-fee',
  templateUrl: './daily-conservation-fee.component.html',
  styleUrls: ['./daily-conservation-fee.component.scss']
})
export class DailyConservationFeeComponent implements OnInit {

  displayedColumns: string[] = ['name','dateEffective','region','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  viewDailyConservationFee(dailyConservationFee){
    const viewDailyConservationFeeDialog = this.dialog.open(ViewDailyConservationFeeComponent);
  }

  addDailyConservationFee(){
    const addDailyConservationFeeDialog = this.dialog.open(AddDailyConservationFeeComponent);
  }
}
