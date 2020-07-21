import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationTypeComponent } from 'src/app/modals/accomodation-type/add-accomodation-type/add-accomodation-type.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewAccomodationTypeComponent } from 'src/app/modals/accomodation-type/view-accomodation-type/view-accomodation-type.component';

export interface PeriodicElement {
  name: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Campsite CK6P'},
  {name: 'Bungalow BA3'},
  {name: 'Bungalow BA3U'},
];
@Component({
  selector: 'app-accomodation-type',
  templateUrl: './accomodation-type.component.html',
  styleUrls: ['./accomodation-type.component.scss']
})
export class AccomodationTypeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAccomodationType(){
    const addAccomodationTypeDialog = this.dialog.open(AddAccomodationTypeComponent,{disableClose: true});
  }

  viewAccomodationTpe(accomodationType){
    const viewAccomodationTypeDialog = this.dialog.open(ViewAccomodationTypeComponent);
  }
}
