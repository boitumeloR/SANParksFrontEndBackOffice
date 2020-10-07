import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate/add-accomodation-add-rate.component';
import { ViewAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/view-accomodation-add-rate/view-accomodation-add-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { AccommAddRateService } from 'src/app/services/AccommAddRate/accomm-add-rate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';

@Component({
  selector: 'app-accomodation-add-rate',
  templateUrl: './accomodation-add-rate.component.html',
  styleUrls: ['./accomodation-add-rate.component.scss']
})
export class AccomodationAddRateComponent implements OnInit {

  displayedColumns: string[] = ['accomodationType', 'date', 'endDate', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private accommodationTypeAddRateService: AccommAddRateService,
              private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.accommodationTypeAddRateService.requestReferesh.subscribe(() => this.getAccommodationAddRate());
    this.getAccommodationAddRate();
  }

  viewAccomodationAddRate(addRate){
    localStorage.setItem('addRate', JSON.stringify(addRate));
    const viewAccomodationAddRateDialog = this.dialog.open(ViewAccomodationAddRateComponent);
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAccomodationAddRate(){
    const addAccomodationAddRateDialog = this.dialog.open(AddAccomodationAddRateComponent, {disableClose: true});
  }

  getAccommodationAddRate(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.accommodationTypeAddRateService.readAccommodationTypeAddRate(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        this.dataSource = new MatTableDataSource(result.AddRates);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem('user', JSON.stringify(result.user));
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
}
