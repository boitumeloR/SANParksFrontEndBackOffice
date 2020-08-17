import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkComponent } from 'src/app/modals/park/add-park/add-park.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewParkComponent } from 'src/app/modals/park/view-park/view-park.component';
import { ParkService, Park } from 'src/app/services/Park/park.service';
import {GlobalService} from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.scss']
})
export class ParkComponent implements OnInit {

  displayedColumns: string[] = ['ParkName', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private parkService: ParkService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.parkService.requestReferesh.subscribe(() => {this.getParks(); });
    this.getParks();
  }

  addPark() {
    const dialogRef = this.dialog.open(AddParkComponent, {disableClose: true});
  }

  ViewPark(park) {
    localStorage.setItem('park', JSON.stringify(park));
    const dialogRef = this.dialog.open(ViewParkComponent);
  }

  getParks(){
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Parks);
      this.dataSource.paginator = this.paginator;
    });
  }
}
