import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddActivitySlotComponent } from 'src/app/modals/activity-slot/add-activity-slot/add-activity-slot.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewActivitySlotComponent } from 'src/app/modals/activity-slot/view-activity-slot/view-activity-slot.component';
import { ActivitySlotService } from 'src/app/services/ActivitySlot/activity-slot.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';

@Component({
  selector: 'app-activity-slot',
  templateUrl: './activity-slot.component.html',
  styleUrls: ['./activity-slot.component.scss']
})
export class ActivitySlotComponent implements OnInit {

  displayedColumns: string[] = ['camp', 'type', 'activityDescription', 'slotTime', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private activitySlotService: ActivitySlotService, private globalService: GlobalService, 
              private router: Router) { }

  ngOnInit(): void {
    this.activitySlotService.requestReferesh.subscribe(() => {this.getActivitySlots(); });
    this.getActivitySlots();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addActivitySlot(){
    const addActivitySlotTimeDialog = this.dialog.open(AddActivitySlotComponent, {disableClose: true});
  }

  viewActivitySlot(activitySlot){
    localStorage.setItem('activitySlot', JSON.stringify(activitySlot));
    const viewActivitySlotTimeDialog = this.dialog.open(ViewActivitySlotComponent);
  }

  getActivitySlots(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.activitySlotService.ReadActivitySlot(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        this.dataSource = new MatTableDataSource(result.ActivitySlots);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem('user', JSON.stringify(result.user));
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
}
