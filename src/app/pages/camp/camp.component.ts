import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddCampComponent } from 'src/app/modals/camp/add-camp/add-camp.component';
import { ViewCampComponent } from 'src/app/modals/camp/view-camp/view-camp.component';
import {MatDialog} from '@angular/material/dialog'; 

export interface PeriodicElement {
  name: string;
  park: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Letaba',park: 'Kruger National Park'},
  { name: 'Rhenosterkop Rest Camp',park: 'Agulhas National Park'},
  { name: 'Boulders Bush Lodge',park: 'Kruger National Park'}
];
@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {

  displayedColumns: string[] = ['name','park','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  viewCamp(camp){
    const viewCampDialog = this.dialog.open(ViewCampComponent);
  }

  addCamp(){
    const addCampDialog = this.dialog.open(AddCampComponent,{disableClose: true});
  }
}
