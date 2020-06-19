import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddCampTypeComponent } from 'src/app/modals/camp-type/add-camp-type/add-camp-type.component';
import { ViewCampTypeComponent } from 'src/app/modals/camp-type/view-camp-type/view-camp-type.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Camp Site (CK6P)'}
];
@Component({
  selector: 'app-camp-type',
  templateUrl: './camp-type.component.html',
  styleUrls: ['./camp-type.component.scss']
})
export class CampTypeComponent implements OnInit {

  displayedColumns: string[] = ['name','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addCampType(){
    const addCampTypeDialog =  this.dialog.open(AddCampTypeComponent,{disableClose:true});
  }

  viewCampType(campType){
    const viewCampTypeDialog = this.dialog.open(ViewCampTypeComponent);
  }

}
