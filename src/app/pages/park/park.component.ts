import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkComponent } from 'src/app/modals/park/add-park/add-park.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ViewParkComponent } from 'src/app/modals/park/view-park/view-park.component';
import { ParkService, Park } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UpdateParkComponent } from 'src/app/modals/park/update-park/update-park.component';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.scss']
})
export class ParkComponent implements OnInit {

  displayedColumns: string[] = ['ParkName', 'view'];
  dataSource: any;
  park$: Observable<Park[]> ;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private parkService: ParkService, private globalService: GlobalService
              ) { }

  ngOnInit(): void {
    this.getParks();
  }

  getParks(): void{
    this.park$ = this.parkService.ReadPark(this.globalService.GetServer());
    this.park$.subscribe(data => {
      this.dataSource = data.ParkName;
    });
  }
  addPark() {
    const dialogRef = this.dialog.open(AddParkComponent, {disableClose: true});
    dialogRef.afterClosed().subscribe(result => {
      this.getParks();
    });
  }

  ViewPark(park) {
    localStorage.setItem('park', JSON.stringify(park));
    const dialogRef = this.dialog.open(ViewParkComponent);

  //  this.dialogRefUpdate.afterClosed().subscribe(result => {
  //      this.getParks();
  //  });
  }
}
