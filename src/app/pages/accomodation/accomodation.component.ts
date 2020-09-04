import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationComponent } from 'src/app/modals/accomodation/add-accomodation/add-accomodation.component';
import { ViewAccomodationComponent } from 'src/app/modals/accomodation/view-accomodation/view-accomodation.component';
import {MatDialog} from '@angular/material/dialog';
import { AccommodationService } from 'src/app/services/Accommodation/accommodation.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {

  displayedColumns: string[] = ['unitNumber', 'accomodationType', 'camp', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private accomodationService: AccommodationService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.accomodationService.requestReferesh.subscribe(() => this.getAccommodation());
    this.getAccommodation();
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAccomodation(){
    const addAccomodationDialog = this.dialog.open(AddAccomodationComponent, {disableClose: true});
  }

  viewAccomodation(accomodation){
    localStorage.setItem('accomodation', JSON.stringify(accomodation));
    const viewAccomodationDialog = this.dialog.open(ViewAccomodationComponent);
  }

  getAccommodation(){
    this.accomodationService.readAccommodation(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.Accomodations);
      this.dataSource.paginator = this.paginator;
    });
  }
}
