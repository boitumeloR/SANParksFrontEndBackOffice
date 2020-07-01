import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmenityComponent } from 'src/app/modals/amenity/add-amenity/add-amenity.component';
import { ViewAmenityComponent } from 'src/app/modals/amenity/view-amenity/view-amenity.component';
import {MatDialog} from '@angular/material/dialog'; 

export interface PeriodicElement {
  camp: string;
  accomodationType: string;
  unitNumber: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { camp: 'Addo',accomodationType: 'Camp Site (CK6P)',unitNumber: '107'},
  { camp: 'Rhenosterkop Rest Camp',accomodationType:'Bungalow BA3', unitNumber: '52'},
  { camp: 'Boulders Bush Lodge',accomodationType:'Bungalow BA3U',unitNumber: '14'}
];
@Component({
  selector: 'app-amenity',
  templateUrl: './amenity.component.html',
  styleUrls: ['./amenity.component.scss']
})
export class AmenityComponent implements OnInit {

  displayedColumns: string[] = ['camp','accomodationType','unitNumber','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addAmenity(){
    const addAmenityDialog = this.dialog.open(AddAmenityComponent,{disableClose: true});
  }

  viewAmenity(amenity){
    const viewAmenityDialog = this.dialog.open(ViewAmenityComponent);
  }
}
