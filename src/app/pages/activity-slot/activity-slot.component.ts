import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivitySlotComponent } from 'src/app/modals/activity-slot/add-activity-slot/add-activity-slot.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewActivitySlotComponent } from 'src/app/modals/activity-slot/view-activity-slot/view-activity-slot.component';

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
  selector: 'app-activity-slot',
  templateUrl: './activity-slot.component.html',
  styleUrls: ['./activity-slot.component.scss']
})
export class ActivitySlotComponent implements OnInit {

  displayedColumns: string[] = ['camp','type','activityDescription', 'view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addActivitySlot(){
    const addActivitySlotTimeDialog = this.dialog.open(AddActivitySlotComponent,{disableClose: true});
  }

  viewActivitySlot(accomodationType){
    const viewActivitySlotTimeDialog = this.dialog.open(ViewActivitySlotComponent);
  }
}
