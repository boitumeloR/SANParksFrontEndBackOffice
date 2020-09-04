import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityComponent } from 'src/app/modals/activity/add-activity/add-activity.component';
import { ViewActivityComponent } from 'src/app/modals/activity/view-activity/view-activity.component';
import {MatDialog} from '@angular/material/dialog';
import { ActivityService } from 'src/app/services/Activity/activity.service';
import { GlobalService } from 'src/app/services/Global/global.service';

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
  constructor(private dialog: MatDialog, private activityService: ActivityService, private globalService: GlobalService) { }

  ngOnInit(): void {
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
    this.activityService.readActivity(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Activities);
      this.dataSource.paginator = this.paginator;
    });
  }
}
