import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityComponent } from 'src/app/modals/activity/add-activity/add-activity.component';
import { ViewActivityComponent } from 'src/app/modals/activity/view-activity/view-activity.component';
import {MatDialog} from '@angular/material/dialog';
import { ActivityService } from 'src/app/services/Activity/activity.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {

  displayedColumns: string[] = ['type', 'activityDescription', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private activityService: ActivityService, private globalService: GlobalService, 
              private router: Router, private snackbar: MatSnackBar, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Activity');
    this.activityService.requestReferesh.subscribe(() => this.getActivities());
    this.getActivities();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addActivity(){
    const addActivityDialog = this.dialog.open(AddActivityComponent, {disableClose: true});
  }

  viewActivity(activity){
    localStorage.setItem('activity', JSON.stringify(activity));
    const viewActivityDialog = this.dialog.open(ViewActivityComponent);
  }

  getActivities(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.activityService.readActivity(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Activities);
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
