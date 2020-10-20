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
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { HelpDocComponent } from 'src/app/help-doc/help-doc.component';

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
              private router: Router, private snackbar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Park');
    this.parkService.requestReferesh.subscribe(() => {this.getParks(); });
    this.getParks();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
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
      this.dataSource = new MatTableDataSource(result.Parks);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  help(){
    const dialogRef = this.dialog.open(HelpDocComponent, {data: '1'});
  }
}
