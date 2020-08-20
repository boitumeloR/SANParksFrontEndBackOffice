import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddCampTypeComponent } from 'src/app/modals/camp-type/add-camp-type/add-camp-type.component';
import { ViewCampTypeComponent } from 'src/app/modals/camp-type/view-camp-type/view-camp-type.component';
import {MatDialog} from '@angular/material/dialog';
import { CampType, CampTypeService } from 'src/app/services/CampType/camp-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-camp-type',
  templateUrl: './camp-type.component.html',
  styleUrls: ['./camp-type.component.scss']
})
export class CampTypeComponent implements OnInit {

  displayedColumns: string[] = ['CampTypeName', 'view'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private campTypeService: CampTypeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.campTypeService.requestReferesh.subscribe(() => {this.getCampType(); });
    this.getCampType();
  }

  addCampType(){
    const addCampTypeDialog =  this.dialog.open(AddCampTypeComponent, {disableClose: true});
  }

  viewCampType(campType){
    localStorage.setItem('campType', JSON.stringify(campType));
    const addCampTypeDialog = this.dialog.open(ViewCampTypeComponent);
  }

  getCampType(){
    this.campTypeService.ReadCampType(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.CampTypes);
      this.dataSource.paginator = this.paginator;
    });
  }

}
