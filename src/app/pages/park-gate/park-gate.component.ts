import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkGateComponent } from 'src/app/modals/park-gate/add-park-gate/add-park-gate.component';
import { ViewParkGateComponent } from 'src/app/modals/park-gate/view-park-gate/view-park-gate.component';
import {MatDialog} from '@angular/material/dialog';
import { ParkGateService } from 'src/app/services/ParkGate/park-gate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-park-gate',
  templateUrl: './park-gate.component.html',
  styleUrls: ['./park-gate.component.scss']
})
export class ParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog, private parkGateService: ParkGateService, private globalService: GlobalService,
              private router: Router, private snackbar: MatSnackBar, private title: Title) { }
  displayedColumns: string[] = ['ParkGateName', 'ParkName', 'ParkGateMax', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.title.setTitle('Park Gate');
    this.parkGateService.requestReferesh.subscribe(() => {this.getParkGates(); });
    this.getParkGates();
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addParkGate(){
    const addParkGateDialog =  this.dialog.open(AddParkGateComponent, {disableClose: true});
  }

  viewParkGate(parkGate){
    localStorage.setItem('parkGate', JSON.stringify(parkGate));
    const viewParkGateDialog = this.dialog.open(ViewParkGateComponent);
  }

  getParkGates(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.parkGateService.ReadParkGate(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.ParkGates);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
}
