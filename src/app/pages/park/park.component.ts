import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddParkComponent } from 'src/app/modals/park/add-park/add-park.component';
import {MatDialog} from '@angular/material/dialog';
import { ViewParkComponent } from 'src/app/modals/park/view-park/view-park.component';



export interface PeriodicElement {
  name: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Addo Elephant National Park'},
  {name: 'Golden Gates Highlands National Park'},
  {name: 'Kruger National Park'},
];
@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.scss']
})
export class ParkComponent implements OnInit {

  displayedColumns: string[] = ['name', 'view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addPark() {
    const dialogRef = this.dialog.open(AddParkComponent,{disableClose: true});
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
