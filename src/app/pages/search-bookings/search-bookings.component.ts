import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddParkComponent } from 'src/app/modals/park/add-park/add-park.component';
import { ViewParkComponent } from 'src/app/modals/park/view-park/view-park.component';

export interface PeriodicElement {
  clientID: string;
  name: string;
  surname: string;
  bookingReference: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { clientID: '99999999999', name: 'Boitumelo', surname: 'Rampete', bookingReference: '2244'},
  { clientID: '99999999999', name: 'Boitumelo', surname: 'Rampete', bookingReference: '2244'},
  { clientID: '99999999999', name: 'Boitumelo', surname: 'Rampete', bookingReference: '2244'},
];
@Component({
  selector: 'app-search-bookings',
  templateUrl: './search-bookings.component.html',
  styleUrls: ['./search-bookings.component.scss']
})
export class SearchBookingsComponent implements OnInit {

  displayedColumns: string[] = ['clientid', 'name', 'surname', 'reference', 'view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addPark() {
    const dialogRef = this.dialog.open(AddParkComponent, {disableClose: true});
    // disableclose restricts the user from just clicking on the backdrop then the modal closes,
    // use it when entering info in a modal, so the user doesnt lose data they've
    //  been entering if they click outside the modal
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ViewPark(park) {
    const dialogRef = this.dialog.open(ViewParkComponent);
  }
}
