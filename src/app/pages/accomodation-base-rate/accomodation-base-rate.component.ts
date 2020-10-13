import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationBaseRateComponent } from 'src/app/modals/accomodation-base-rate/add-accomodation-base-rate/add-accomodation-base-rate.component';
import { ViewAccomodationBaseRateComponent } from 'src/app/modals/accomodation-base-rate/view-accomodation-base-rate/view-accomodation-base-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { AccommBaseRateService } from 'src/app/services/AccommBaseRate/accomm-base-rate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-accomodation-base-rate',
  templateUrl: './accomodation-base-rate.component.html',
  styleUrls: ['./accomodation-base-rate.component.scss']
})
export class AccomodationBaseRateComponent implements OnInit {

  displayedColumns: string[] = ['accomodationType', 'camp', 'rate', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private accommodationTypeBaseRateService: AccommBaseRateService,
              private globalService: GlobalService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.accommodationTypeBaseRateService.requestReferesh.subscribe(() => this.getAccommodationBaseRate());
    this.getAccommodationBaseRate();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  viewAccomodationBaseRate(baseRate){
    localStorage.setItem('baseRate', JSON.stringify(baseRate));
    const viewAccomodationBaseRateDialog = this.dialog.open(ViewAccomodationBaseRateComponent);
  }

  addAccomodationBaseRate(){
    const addAccomodationBaseRateDialog = this.dialog.open(AddAccomodationBaseRateComponent, {disableClose: true});
  }

  getAccommodationBaseRate(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.accommodationTypeBaseRateService.readAccommodationTypeBaseRate(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.BaseRates);
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
