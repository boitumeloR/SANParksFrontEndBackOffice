import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkGateComponent } from 'src/app/modals/park-gate/add-park-gate/add-park-gate.component';
import { ViewParkGateComponent } from 'src/app/modals/park-gate/view-park-gate/view-park-gate.component';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  location: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Orpen Gate',location: '24.5762° S, 31.0579° E'},
  {name: 'Phalaborwa Gate', location: '23.9457° S, 31.1648° E'},
  {name: 'Malelane Gate', location: '25.4618° S, 31.5329° E'},
];
@Component({
  selector: 'app-park-gate',
  templateUrl: './park-gate.component.html',
  styleUrls: ['./park-gate.component.scss']
})
export class ParkGateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  displayedColumns: string[] = ['name','location','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addParkGate(){
    const addParkGateDialog =  this.dialog.open(AddParkGateComponent,{disableClose: true});

    addParkGateDialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  viewParkGate(parkGate){
    const viewParkGateDialog = this.dialog.open(ViewParkGateComponent);
  }
}
