import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmentityTypeComponent } from 'src/app/modals/amenity-type/add-amentity-type/add-amentity-type.component';
import { ViewAmentityTypeConfirmationComponent } from 'src/app/modals/amenity-type/view-amentity-type-confirmation/view-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog'; 

@Component({
  selector: 'app-amenity-type',
  templateUrl: './amenity-type.component.html',
  styleUrls: ['./amenity-type.component.scss']
})
export class AmenityTypeComponent implements OnInit {

  displayedColumns: string[] = ['AmenityTypeName', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  viewAmenityType(amenityType){
    const viewCampDialog = this.dialog.open(ViewAmentityTypeConfirmationComponent);
  }

  addAmenityType(){
    const addCampDialog = this.dialog.open(AddAmentityTypeComponent,{disableClose: true});
  }
}
