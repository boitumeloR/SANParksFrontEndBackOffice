import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddCampComponent } from 'src/app/modals/camp/add-camp/add-camp.component';
import { ViewCampComponent } from 'src/app/modals/camp/view-camp/view-camp.component';
import {MatDialog} from '@angular/material/dialog';
import { CampService } from 'src/app/services/Camp/camp.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent implements OnInit {

  displayedColumns: string[] = ['name', 'park', 'view'];
  dataSource ;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private campService: CampService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.campService.requestReferesh.subscribe(() => {this.getCamp(); });
    this.getCamp();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  viewCamp(camp){
    localStorage.setItem('camp', JSON.stringify(camp));
    const viewCampDialog = this.dialog.open(ViewCampComponent);
  }

  addCamp(){
    const addCampDialog = this.dialog.open(AddCampComponent, {disableClose: true});
  }

  getCamp(){
    this.campService.readCamp(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Camps);
      this.dataSource.paginator = this.paginator;
    });
  }
}
