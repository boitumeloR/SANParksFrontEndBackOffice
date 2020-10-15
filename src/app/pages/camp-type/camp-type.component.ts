import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddCampTypeComponent } from 'src/app/modals/camp-type/add-camp-type/add-camp-type.component';
import { ViewCampTypeComponent } from 'src/app/modals/camp-type/view-camp-type/view-camp-type.component';
import {MatDialog} from '@angular/material/dialog';
import { CampType, CampTypeService } from 'src/app/services/CampType/camp-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-camp-type',
  templateUrl: './camp-type.component.html',
  styleUrls: ['./camp-type.component.scss']
})
export class CampTypeComponent implements OnInit {

  displayedColumns: string[] = ['CampTypeName', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private campTypeService: CampTypeService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Camp Type');
    this.campTypeService.requestReferesh.subscribe(() => {this.getCampType(); });
    this.getCampType();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addCampType(){
    const addCampTypeDialog =  this.dialog.open(AddCampTypeComponent, {disableClose: true});
  }

  viewCampType(campType){
    localStorage.setItem('campType', JSON.stringify(campType));
    const addCampTypeDialog = this.dialog.open(ViewCampTypeComponent);
  }

  getCampType(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.campTypeService.ReadCampType(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.CampTypes);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    }
);
  }

}
