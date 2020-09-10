import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkGateComponent } from 'src/app/modals/park-gate/add-park-gate/add-park-gate.component';
import { ViewParkGateComponent } from 'src/app/modals/park-gate/view-park-gate/view-park-gate.component';
import {MatDialog} from '@angular/material/dialog';
import { ParkGateService } from 'src/app/services/ParkGate/park-gate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-park-gate',
  templateUrl: './park-gate.component.html',
  styleUrls: ['./park-gate.component.scss']
})
export class ParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog, private parkGateService: ParkGateService, private globalService: GlobalService,
              private router: Router) { }
  displayedColumns: string[] = ['ParkGateName', 'ParkName', 'ParkGateMax', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.parkGateService.requestReferesh.subscribe(() => {this.getParkGates(); });
    this.getParkGates();
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
    this.parkGateService.ReadParkGate(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        this.dataSource = new MatTableDataSource(result.ParkGates);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem('user', JSON.stringify(result.user));
      }
    });
  }
}
