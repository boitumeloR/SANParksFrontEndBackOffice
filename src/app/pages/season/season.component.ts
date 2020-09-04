import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddSeasonComponent } from 'src/app/modals/season/add-season/add-season.component';
import { ViewSeasonComponent } from 'src/app/modals/season/view-season/view-season.component';
import {MatDialog} from '@angular/material/dialog';
import { SeasonService } from 'src/app/services/Season/season.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  dataSource;
  filter;
  constructor(private dialog: MatDialog, private seasonService: SeasonService, private globalService: GlobalService) { }

  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'view'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.seasonService.requestReferesh.subscribe(() => {this.getSeason(); } );
    this.getSeason();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addSeason(){
    const addSeasonDialog = this.dialog.open(AddSeasonComponent, {disableClose: true});
  }

  viewSeason(season){
    localStorage.setItem('season', JSON.stringify(season));
    const viewSeasonDialog = this.dialog.open(ViewSeasonComponent);
  }

  getSeason(){
    this.seasonService.ReadSeason(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Seasons);
      this.dataSource.paginator = this.paginator;
    });
  }
}
