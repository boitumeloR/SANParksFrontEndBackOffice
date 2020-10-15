import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmenityComponent } from 'src/app/modals/amenity/add-amenity/add-amenity.component';
import { ViewAmenityComponent } from 'src/app/modals/amenity/view-amenity/view-amenity.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityService } from 'src/app/services/Amenity/amenity.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-amenity',
  templateUrl: './amenity.component.html',
  styleUrls: ['./amenity.component.scss']
})
export class AmenityComponent implements OnInit {

  displayedColumns: string[] = ['camp', 'accomodationType', 'unitNumber', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private amenityService: AmenityService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Amenity');
    this.amenityService.requestReferesh.subscribe(() => {this.getAmenity(); });
    this.getAmenity();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAmenity(){
    const addAmenityDialog = this.dialog.open(AddAmenityComponent, {disableClose: true});
  }

  viewAmenity(amenity){
    localStorage.setItem('amenity', JSON.stringify(amenity));
    const viewAmenityDialog = this.dialog.open(ViewAmenityComponent);
  }

  getAmenity(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.amenityService.readAmenity(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Amenities);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
 }
}
