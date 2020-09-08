import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAmentityTypeComponent } from 'src/app/modals/amenity-type/add-amentity-type/add-amentity-type.component';
import { ViewAmentityTypeConfirmationComponent } from 'src/app/modals/amenity-type/view-amentity-type-confirmation/view-amentity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import { AmenityTypeService } from 'src/app/services/AmenityType/amenity-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/Login/login.service';



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
              private router: Router, private loginService: LoginService ) { }

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
    this.amenityTypeService.readAmenityType(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        this.dataSource = new MatTableDataSource(result.AmenityTypes);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem('user', JSON.stringify(result.user));
      }
    });
  }
}
