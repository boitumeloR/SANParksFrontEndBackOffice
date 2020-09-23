import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/add-amenity-penalty/add-amenity-penalty.component';
import { ViewAmenityPenaltyComponent } from 'src/app/modals/amenity-penalty/view-amenity-penalty/view-amenity-penalty.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityPenaltyService } from 'src/app/services/AmenityPenalty/amenity-penalty.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amenity-penalty',
  templateUrl: './amenity-penalty.component.html',
  styleUrls: ['./amenity-penalty.component.scss']
})
export class AmenityPenaltyComponent implements OnInit {

  displayedColumns: string[] = ['camp', 'accomodationType', 'unitNumber', 'dateEffective', 'endDate', 'view'];
  dataSource;
  filter;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private amenityPenaltyService: AmenityPenaltyService,
              private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.amenityPenaltyService.requestReferesh.subscribe(() => this.getAmenityPenalty());
    this.getAmenityPenalty();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAmenityPenalty(){
    const addAmenityPenaltyDialog = this.dialog.open(AddAmenityPenaltyComponent, {disableClose: true});
  }

  viewAmenityPenalty(amenityPenalty){
    localStorage.setItem('amenityPenalty', JSON.stringify(amenityPenalty));
    const viewAmenityDialog = this.dialog.open(ViewAmenityPenaltyComponent);
  }

  getAmenityPenalty(){
    this.amenityPenaltyService.readAmenityPenalty(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        this.dataSource = new MatTableDataSource(result.AmenityPenalties);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem('user', JSON.stringify(result.user));
      }
    });
  }
}
