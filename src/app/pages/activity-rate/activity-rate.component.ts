import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityRateComponent } from 'src/app/modals/activity-rate/add-activity-rate/add-activity-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewActivityRateComponent } from 'src/app/modals/activity-rate/view-activity-rate/view-activity-rate.component';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityRateService } from 'src/app/services/ActivityRate/activity-rate.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-activity-rate',
  templateUrl: './activity-rate.component.html',
  styleUrls: ['./activity-rate.component.scss']
})
export class ActivityRateComponent implements OnInit {

  displayedColumns: string[] = ['camp', 'type', 'activityDescription', 'dateEffective', 'endDate', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private activityRateService: ActivityRateService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Activity Rate');
    this.activityRateService.requestReferesh.subscribe(() => {this.getActivityRates(); });
    this.getActivityRates();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addActivityRate(){
    const addActivityRateDialog = this.dialog.open(AddActivityRateComponent, {disableClose: true});
  }

  viewActivityRate(activityRate){
    localStorage.setItem('activityRate', JSON.stringify(activityRate));
    const viewActivityRateDialog = this.dialog.open(ViewActivityRateComponent);
  }

  getActivityRates(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.activityRateService.readActivityRate(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.ActivityRates);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    }
  );
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
 }
}
