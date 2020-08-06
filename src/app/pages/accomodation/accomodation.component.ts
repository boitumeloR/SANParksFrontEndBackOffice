import { Component, OnInit , ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddAccomodationComponent } from 'src/app/modals/accomodation/add-accomodation/add-accomodation.component';
import { ViewAccomodationComponent } from 'src/app/modals/accomodation/view-accomodation/view-accomodation.component';
import {MatDialog} from '@angular/material/dialog'; 
import { GlobalService } from 'src/app/services/global.service';
import { ParkService, Park } from 'src/app/services/Park/park.service';

export interface PeriodicElement {
  unitNumber: string;
  accomodationType: string;
  camp: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { unitNumber: '107', accomodationType: 'Camp Site (CK6P)', camp: 'Letaba'},
  { unitNumber: '52', accomodationType: 'Bungalow BA3', camp: 'Rhenosterkop Rest Camp'},
  { unitNumber: '14', accomodationType: 'Bungalow BA3U', camp: 'Boulders Bush Lodge'}
];
@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {

  displayedColumns: string[] = ['unitNumber','accomodationType','camp','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  park: Park;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private server: GlobalService, private parkServ: ParkService) { }

  ngOnInit(): void {
    const serv = this.server.GetServer();
    this.parkServ.GetWhatever({tumi: 'Boitumelo'}, serv);
  }

  addAccomodation(){
    const addAccomodationDialog = this.dialog.open(AddAccomodationComponent,{disableClose: true});
  }
  viewAccomodation(accomodation){
    const viewAccomodationDialog = this.dialog.open(ViewAccomodationComponent);
  }
}
