import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmenityComponent } from 'src/app/modals/amenity/add-amenity/add-amenity.component';
import { ViewAmenityComponent } from 'src/app/modals/amenity/view-amenity/view-amenity.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityService } from 'src/app/services/Amenity/amenity.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-amenity',
  templateUrl: './amenity.component.html',
  styleUrls: ['./amenity.component.scss']
})
export class AmenityComponent implements OnInit {

  displayedColumns: string[] = ['camp', 'accomodationType', 'unitNumber', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private amenityService: AmenityService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.amenityService.requestReferesh.subscribe(() => {this.getAmenity(); });
    this.getAmenity();
  }

  addAmenity(){
    const addAmenityDialog = this.dialog.open(AddAmenityComponent, {disableClose: true});
  }

  viewAmenity(amenity){
    localStorage.setItem('amenity', JSON.stringify(amenity));
    const viewAmenityDialog = this.dialog.open(ViewAmenityComponent);
  }

  getAmenity(){
    this.amenityService.readAmenity(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = result.Amenities;
      this.dataSource.paginator = this.paginator;
    });
  }
}
