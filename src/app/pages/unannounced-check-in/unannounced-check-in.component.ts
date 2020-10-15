import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

const ELEMENT_DATA: any[] = [
  { name: 'Tumi', surname: 'Rampete', ID: '99999999999', age: 22, country: 'South Africa'},
  { name: 'Jade', surname: 'Arumugam', ID: '99999999999', age: 22, country: 'South Africa'},
  { name: 'Robyn', surname: 'Pillay', ID: '999999999999', age: 22, country: 'South Africa'},
];

@Component({
  selector: 'app-unannounced-check-in',
  templateUrl: './unannounced-check-in.component.html',
  styleUrls: ['./unannounced-check-in.component.scss']
})
export class UnannouncedCheckInComponent implements OnInit {

  constructor(private dialog: MatDialog, private title: Title) { }

  displayedColumns: string[] = ['name', 'surname', 'id', 'age', 'country'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.title.setTitle('Unannounced Check-In')
    this.dataSource.paginator = this.paginator;
  }

  addSeason(){
    // const addSeasonDialog = this.dialog.open(AddSeasonComponent,{disableClose: true});
  }

  viewSeason(season){
    // const viewSeasonDialog = this.dialog.open(ViewSeasonComponent)
  }
}
