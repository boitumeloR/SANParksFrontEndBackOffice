import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivityTypeComponent } from 'src/app/modals/activity-type/add-activity-type/add-activity-type.component';
import { ViewActivityTypeComponent } from 'src/app/modals/activity-type/view-activity-type/view-activity-type.component';
import {MatDialog} from '@angular/material/dialog';
import { ActivityTypeService } from 'src/app/services/ActivityType/activity-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';

@Component({
  selector: 'app-activity-type',
  templateUrl: './activity-type.component.html',
  styleUrls: ['./activity-type.component.scss']
})
export class ActivityTypeComponent implements OnInit {
  dataSource;
  filter;
  displayedColumns: string[] = ['ActivityTypeDescription', 'view'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private activityTypeService: ActivityTypeService, private globalService: GlobalService,
              private router: Router) { }

  ngOnInit(): void {
    this.activityTypeService.requestReferesh.subscribe(() => {this.getActivityTypes(); });
    this.getActivityTypes();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addActivityType(){
    const addActivityTypeDialog = this.dialog.open(AddActivityTypeComponent, {disableClose: true});
  }

  viewActivityType(activityType){
    localStorage.setItem('activityType', JSON.stringify(activityType));
    const dialogRef = this.dialog.open(ViewActivityTypeComponent);
  }

  getActivityTypes(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.activityTypeService.readActivityType(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.ActivityTypes);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    }
);
  }
}
