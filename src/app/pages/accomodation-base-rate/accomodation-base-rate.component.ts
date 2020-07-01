import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationBaseRateComponent } from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate/add-accomodation-base-rate.component';
import { ViewAccomodationBaseRateComponent } from 'src/app/modals/accomodation-base-rate/view-accomodation-base-rate/view-accomodation-base-rate.component';
import {MatDialog} from '@angular/material/dialog'; 

export interface PeriodicElement {
  rate: string;
  accomodationType: string;
  camp: string
}
const ELEMENT_DATA: PeriodicElement[] = [
  { accomodationType: 'Camp Site (CK6P)',camp: 'Letaba',rate: 'R300'},
  { accomodationType: 'Bungalow BA3',camp: 'Rhenosterkop Rest Camp',rate: 'R450'},
  { accomodationType: 'Bungalow BA3U',camp: 'Boulders Bush Lodge',rate: 'R250'}
];
@Component({
  selector: 'app-accomodation-base-rate',
  templateUrl: './accomodation-base-rate.component.html',
  styleUrls: ['./accomodation-base-rate.component.scss']
})
export class AccomodationBaseRateComponent implements OnInit {

  displayedColumns: string[] = ['accomodationType','camp','rate','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewAccomodationBaseRate(baseRate){
    const viewAccomodationBaseRateDialog = this.dialog.open(ViewAccomodationBaseRateComponent);
  }

  addAccomodationBaseRate(){
    const addAccomodationBaseRateDialog = this.dialog.open(AddAccomodationBaseRateComponent,{disableClose: true});
  }
}
