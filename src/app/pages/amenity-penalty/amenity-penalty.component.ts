import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/add-amenity-penalty/add-amenity-penalty.component';
import { ViewAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/view-amenity-penalty/view-amenity-penalty.component';
import {MatDialog} from '@angular/material/dialog'; 

export interface PeriodicElement {
  camp: string;
  accomodationType: string;
  unitNumber: string;
  dateEffective: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { camp: 'Addo',accomodationType: 'Camp Site (CK6P)',unitNumber: '107',dateEffective:'01/01/2020'},
  { camp: 'Rhenosterkop Rest Camp',accomodationType:'Bungalow BA3', unitNumber: '52',dateEffective:'01/03/2019'},
  { camp: 'Boulders Bush Lodge',accomodationType:'Bungalow BA3U',unitNumber: '14',dateEffective:'	01/01/2018'}
];

@Component({
  selector: 'app-amenity-penalty',
  templateUrl: './amenity-penalty.component.html',
  styleUrls: ['./amenity-penalty.component.scss']
})
export class AmenityPenaltyComponent implements OnInit {

  displayedColumns: string[] = ['camp','accomodationType','unitNumber','dateEffective','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  
  addAmenityPenalty(){
    const addAmenityPenaltyDialog = this.dialog.open(AddAmenityPenaltyComponent,{disableClose: true});
  }

  viewAmenityPenalty(amenityPenalty){
    const viewAmenityDialog = this.dialog.open(ViewAmenityPenaltyComponent);
  }
}
