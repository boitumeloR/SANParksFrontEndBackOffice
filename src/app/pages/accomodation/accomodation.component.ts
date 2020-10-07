import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationComponent } from 'src/app/modals/accomodation/add-accomodation/add-accomodation.component';
import { ViewAccomodationComponent } from 'src/app/modals/accomodation/view-accomodation/view-accomodation.component';
import {MatDialog} from '@angular/material/dialog';
import { AccommodationService } from 'src/app/services/Accommodation/accommodation.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {

  displayedColumns: string[] = ['unitNumber', 'accomodationType', 'camp', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private accomodationService: AccommodationService, private globalService: GlobalService,
              private router: Router) { }

  ngOnInit(): void {
    this.accomodationService.requestReferesh.subscribe(() => this.getAccommodation());
    this.getAccommodation();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAccomodation(){
    const addAccomodationDialog = this.dialog.open(AddAccomodationComponent, {disableClose: true});
  }

  viewAccomodation(accomodation){
    localStorage.setItem('accomodation', JSON.stringify(accomodation));
    const viewAccomodationDialog = this.dialog.open(ViewAccomodationComponent);
  }

  getAccommodation(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.accomodationService.readAccommodation(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
      this.dataSource = new MatTableDataSource(result.Accomodations);
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
    }
);
  }
}
