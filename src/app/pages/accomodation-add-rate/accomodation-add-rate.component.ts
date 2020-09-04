import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate/add-accomodation-add-rate.component';
import { ViewAccomodationAddRateComponent } from 'src/app/modals/accomodation-add-rate/view-accomodation-add-rate/view-accomodation-add-rate.component';
import {MatDialog} from '@angular/material/dialog';
import { AccommAddRateService } from 'src/app/services/AccommAddRate/accomm-add-rate.service';
import { GlobalService } from 'src/app/services/Global/global.service';


@Component({
  selector: 'app-accomodation-add-rate',
  templateUrl: './accomodation-add-rate.component.html',
  styleUrls: ['./accomodation-add-rate.component.scss']
})
export class AccomodationAddRateComponent implements OnInit {

  displayedColumns: string[] = ['accomodationType', 'date', 'view'];
  dataSource;
  filter;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private accommodationTypeAddRateService: AccommAddRateService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.accommodationTypeAddRateService.requestReferesh.subscribe(() => this.getAccommodationAddRate());
    this.getAccommodationAddRate();
  }

  viewAccomodationAddRate(addRate){
    localStorage.setItem('addRate', JSON.stringify(addRate));
    const viewAccomodationAddRateDialog = this.dialog.open(ViewAccomodationAddRateComponent);
  }

  filterTable(filter){
    this.dataSource.filter = filter;
  }

  addAccomodationAddRate(){
    const addAccomodationAddRateDialog = this.dialog.open(AddAccomodationAddRateComponent, {disableClose: true});
  }

  getAccommodationAddRate(){
    this.accommodationTypeAddRateService.readAccommodationTypeAddRate(this.globalService.GetServer()).subscribe((result: any) => {
      this.dataSource = new MatTableDataSource(result.AddRates);
      this.dataSource.paginator = this.paginator;
    });
  }
}
