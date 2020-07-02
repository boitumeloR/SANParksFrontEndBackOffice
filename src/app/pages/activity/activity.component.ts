import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityComponent } from 'src/app/modals/activity/add-activity/add-activity.component';
import { ViewActivityComponent } from 'src/app/modals/activity/view-activity/view-activity.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  type: string;
  activityDescription: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { type: 'Sunset Drive',activityDescription: '2 Hour Drive'},
  { type:'Night Drive', activityDescription: '3 Hour Drive'},
  { type:'Hiking',activityDescription: 'Bush Hike'}
];
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent implements OnInit {

  displayedColumns: string[] = ['type','activityDescription','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addActivity(){
    const addActivityDialog = this.dialog.open(AddActivityComponent,{disableClose: true});
  }

  viewActivity(activity){
    const viewActivityDialog = this.dialog.open(ViewActivityComponent);
  }
}
