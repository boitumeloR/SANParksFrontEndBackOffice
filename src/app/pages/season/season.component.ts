import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddSeasonComponent } from 'src/app/modals/season/add-season/add-season.component';
import { ViewSeasonComponent } from 'src/app/modals/season/view-season/view-season.component';
import {MatDialog} from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  startDate: string;
  endDate: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'High',startDate: '01/01/2020',endDate: '30/04/2020'},
  {name: 'Shoulder', startDate: '01/05/2020',endDate: '31/08/2020'},
  {name: 'Low', startDate: '01/09/2020',endDate: '31/12/2020'},
];

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name','startDate','endDate','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addSeason(){
    const addSeasonDialog = this.dialog.open(AddSeasonComponent,{disableClose: true});
  }

  viewSeason(season){
    const viewSeasonDialog = this.dialog.open(ViewSeasonComponent)
  }
}
