import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationTypeComponent } from 'src/app/modals/accomodation-type/add-accomodation-type/add-accomodation-type.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewAccomodationTypeComponent } from 'src/app/modals/accomodation-type/view-accomodation-type/view-accomodation-type.component';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-accomodation-type',
  templateUrl: './accomodation-type.component.html',
  styleUrls: ['./accomodation-type.component.scss']
})
export class AccomodationTypeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private accommodationTypeService: AccommodationTypeService,
              private globalService: GlobalService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.accommodationTypeService.requestReferesh.subscribe(() => this.getAccommodationTypes());
    this.getAccommodationTypes();
  }

  addAccomodationType(){
    const addAccomodationTypeDialog = this.dialog.open(AddAccomodationTypeComponent, {disableClose: true});
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  viewAccomodationType(accomodationType){
    localStorage.setItem('accommodationType', JSON.stringify(accomodationType));
    const viewAccomodationTypeDialog = this.dialog.open(ViewAccomodationTypeComponent);
  }

  getAccommodationTypes(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.accommodationTypeService.readAccommodationType(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.AccommodationTypes);
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
