import { Component, OnInit, ViewChild } from '@angular/core';
import {AddClientComponent} from 'src/app/modals/client/add-client/add-client.component';
import {ViewClientComponent} from 'src/app/modals/client/view-client/view-client.component'
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog'; 

export interface PeriodicElement {
  name: string;
  identity: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Robyn Sancha Pillay',identity: '9801567894563'},
  { name: 'Jade Delene Arumugan',identity: '0001567897613'},
  { name: 'Blessing Makumbila',identity: '03011567894563'}
];
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  displayedColumns: string[] = ['name','identity','view'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  addClient(){
    const addClientDialog = this.dialog.open(AddClientComponent,{disableClose: true});
  }

  viewClient(client){
    const viewClientDialog = this.dialog.open(ViewClientComponent);
  }
}
