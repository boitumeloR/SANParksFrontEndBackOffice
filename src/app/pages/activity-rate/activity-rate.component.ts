import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityRateComponent } from 'src/app/modals/activity-rate/add-activity-rate/add-activity-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewActivityRateComponent } from 'src/app/modals/activity-rate/view-activity-rate/view-activity-rate.component';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityRateService } from 'src/app/services/ActivityRate/activity-rate.service';

@Component({
  selector: 'app-activity-rate',
  templateUrl: './activity-rate.component.html',
  styleUrls: ['./activity-rate.component.scss']
})
export class ActivityRateComponent implements OnInit {

  displayedColumns: string[] = ['camp', 'type', 'activityDescription', 'dateEffective', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private activityRateService: ActivityRateService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.activityRateService.requestReferesh.subscribe(() => {this.getActivityRates(); });
    this.getActivityRates();

  }

  addActivityRate(){
    const addActivityRateDialog = this.dialog.open(AddActivityRateComponent, {disableClose: true});
  }

  viewActivityRate(activityRate){
    localStorage.setItem('activityRate', JSON.stringify(activityRate));
    const viewActivityRateDialog = this.dialog.open(ViewActivityRateComponent);
  }

  getActivityRates(){
    this.activityRateService.readActivityRate(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.ActivityRates);
      this.dataSource.paginator = this.paginator;
    });
  }
}
