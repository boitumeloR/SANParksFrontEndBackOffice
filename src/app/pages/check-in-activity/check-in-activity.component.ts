import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CancelAlertComponent } from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { AddEquipmentComponent } from 'src/app/modals/add-equipment/add-equipment.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa', paid: true},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa', paid: true},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa',  paid: false},
];
const ACTIVITY_DATA: any[] = [
  { activityName: 'Morning Drive', activityType: 'Drive', Date: '21/02/2020', Time: '14:00',
   numParticipants: '2 Adult, 2 Children'}
];

@Component({
  selector: 'app-check-in-activity',
  templateUrl: './check-in-activity.component.html',
  styleUrls: ['./check-in-activity.component.scss']
})
export class CheckInActivityComponent implements OnInit {

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private title: Title) { }

  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'country', 'conservation'];
  activityColumns: string[] = ['name', 'type', 'date', 'time', 'participants'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  activitySource = new MatTableDataSource(ACTIVITY_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.title.setTitle('Check-In Activity');
    this.dataSource.paginator = this.paginator;
  }

  addSeason(){
    // const addSeasonDialog = this.dialog.open(AddSeasonComponent,{disableClose: true});
  }

  viewSeason(season){
    // const viewSeasonDialog = this.dialog.open(ViewSeasonComponent)
  }

  Cancel() {
    const cancelDialog = this.dialog.open(CancelAlertComponent, {
      disableClose: true
    });
  }

  AddEquipment() {
    const cancelDialog = this.dialog.open(AddEquipmentComponent, {
      disableClose: true
    });
  }

  Submit() {
    this.snackBar.open('You have successfully checked in for an activity', 'Okay', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000
    });
  }
}
