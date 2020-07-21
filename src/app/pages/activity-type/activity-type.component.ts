import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityTypeComponent } from 'src/app/modals/activity-type/add-activity-type/add-activity-type.component';
import { ViewActivityTypeComponent } from 'src/app/modals/activity-type/view-activity-type/view-activity-type.component';
import {MatDialog} from '@angular/material/dialog'; 

export interface PeriodicElement {
  name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Sunset Drive'},
  { name: 'Night Drive'},
  { name: 'Hiking'}
];

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.scss']
})
export class ActivityTypeComponent implements OnInit {

  displayedColumns: string[] = ['name','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addActivityType(){
    const addCampDialog = this.dialog.open(AddActivityTypeComponent,{disableClose: true});
  }

  viewActivityType(activityType){
    const viewCampDialog = this.dialog.open(ViewActivityTypeComponent);
  }
}
