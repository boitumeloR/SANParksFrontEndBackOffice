import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate/add-accomodation-add-rate.component';
import { ViewAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/view-accomodation-add-rate/view-accomodation-add-rate.component';
import {MatDialog} from '@angular/material/dialog'; 

export interface PeriodicElement {
  accomodationType: string;
  date: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  { accomodationType: 'Camp Site (CK6P)',date: '01/01/2020'},
  { accomodationType: 'Bungalow BA3',date: '01/03/2019'},
  { accomodationType: 'Bungalow BA3U',date: '01/01/2018'}
];
@Component({
  selector: 'app-accomodation-add-rate',
  templateUrl: './accomodation-add-rate.component.html',
  styleUrls: ['./accomodation-add-rate.component.scss']
})
export class AccomodationAddRateComponent implements OnInit {

  displayedColumns: string[] = ['accomodationType','date','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewAccomodationAddRate(addRate){
    const viewAccomodationAddRateDialog = this.dialog.open(ViewAccomodationAddRateComponent);
  }

  addAccomodationAddRate(){
    const addAccomodationAddRateDialog = this.dialog.open(AddAccomodationAddRateComponent,{disableClose: true});
  }
}
