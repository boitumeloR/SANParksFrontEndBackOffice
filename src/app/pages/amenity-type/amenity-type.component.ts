import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmentityTypeComponent } from 'src/app/modals/amenity-type/add-amentity-type/add-amentity-type.component';
import { ViewAmentityTypeConfirmationComponent } from 'src/app/modals/amenity-type/view-amentity-type-confirmation/view-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityTypeService } from 'src/app/services/AmenityType/amenity-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';

@Component({
  selector: 'app-amenity-type',
  templateUrl: './amenity-type.component.html',
  styleUrls: ['./amenity-type.component.scss']
})
export class AmenityTypeComponent implements OnInit {
  dataSource;
  filter;
  displayedColumns: string[] = ['AmenityTypeName', 'view'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private amenityTypeService: AmenityTypeService, private globalService: GlobalService,
              private router: Router) { }

  ngOnInit(): void {
    this.amenityTypeService.requestReferesh.subscribe(() => {this.getAmenityTypes(); });
    this.getAmenityTypes();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAmenityType(){
    const addAmenityTypeDialog = this.dialog.open(AddAmentityTypeComponent, {disableClose: true});
  }

  viewAmenityType(amenityType){
    localStorage.setItem('amenityType', JSON.stringify(amenityType));
    const dialogRef = this.dialog.open(ViewAmentityTypeConfirmationComponent);
  }

  getAmenityTypes(){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.amenityTypeService.readAmenityType(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.AmenityTypes);
      this.dataSource.paginator = this.paginator;
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    }
);
  }
}
