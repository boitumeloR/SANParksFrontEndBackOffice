import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/add-amenity-penalty/add-amenity-penalty.component';
import { ViewAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/view-amenity-penalty/view-amenity-penalty.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityPenaltyService } from 'src/app/services/AmenityPenalty/amenity-penalty.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-amenity-penalty',
  templateUrl: './amenity-penalty.component.html',
  styleUrls: ['./amenity-penalty.component.scss']
})
export class AmenityPenaltyComponent implements OnInit {

  displayedColumns: string[] = ['camp', 'accomodationType', 'unitNumber', 'dateEffective', 'endDate', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private amenityPenaltyService: AmenityPenaltyService,
              private globalService: GlobalService, private router: Router, private snackbar: MatSnackBar,
              private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Amenity Penalty');
    this.amenityPenaltyService.requestReferesh.subscribe(() => this.getAmenityPenalty());
    this.getAmenityPenalty();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAmenityPenalty(){
    const addAmenityPenaltyDialog = this.dialog.open(AddAmenityPenaltyComponent, {disableClose: true});
  }

  viewAmenityPenalty(amenityPenalty){
    localStorage.setItem('amenityPenalty', JSON.stringify(amenityPenalty));
    const viewAmenityDialog = this.dialog.open(ViewAmenityPenaltyComponent);
  }

  getAmenityPenalty(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.amenityPenaltyService.readAmenityPenalty(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.AmenityPenalties);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
}
