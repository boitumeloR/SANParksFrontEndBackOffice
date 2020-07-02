import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityRateComponent } from 'src/app/modals/activity-rate/add-activity-rate/add-activity-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewActivityRateComponent } from 'src/app/modals/activity-rate/view-activity-rate/view-activity-rate.component';

export interface PeriodicElement {
  camp: string;
  type: string;
  activityDescription: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { camp: 'Matyholweni',type: 'Sunset Drive',activityDescription: '2 Hour Drive'},
  { camp: 'Lower Sabie',type:'Night Drive', activityDescription: '3 Hour Drive'},
  { camp: 'Sirheni',type:'Hiking',activityDescription: 'Bush Hike'}
];
@Component({
  selector: 'app-activity-rate',
  templateUrl: './activity-rate.component.html',
  styleUrls: ['./activity-rate.component.scss']
})
export class ActivityRateComponent implements OnInit {

  displayedColumns: string[] = ['camp','type','activityDescription', 'view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addActivityRate(){
    const addActivityRateDialog = this.dialog.open(AddActivityRateComponent,{disableClose: true});
  }

  viewActivityRate(activityRate){
    const viewActivityRateDialog = this.dialog.open(ViewActivityRateComponent);
  }
}
