import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkComponent } from 'src/app/modals/park/add-park/add-park.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewParkComponent } from 'src/app/modals/park/view-park/view-park.component';
import { ParkService, Park } from 'src/app/services/Park/park.service';
import {GlobalService} from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.scss']
})
export class ParkComponent implements OnInit {
  displayedColumns: string[] = ['ParkName', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private parkService: ParkService, private globalService: GlobalService,
              private router: Router) { }

  ngOnInit(): void {
    this.parkService.requestReferesh.subscribe(() => {this.getParks(); });
    this.getParks();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addPark() {
    const dialogRef = this.dialog.open(AddParkComponent, {disableClose: true});
  }

  ViewPark(park) {
    localStorage.setItem('park', JSON.stringify(park));
    const dialogRef = this.dialog.open(ViewParkComponent);
  }

  getParks(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        this.dataSource = new MatTableDataSource(result.Parks);
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
