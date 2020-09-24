import { Component, OnInit, ViewChild } from '@angular/core';
import {AddClientComponent} from 'src/app/modals/client/add-client/add-client.component';
import {ViewClientComponent} from 'src/app/modals/client/view-client/view-client.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Client, ClientService } from 'src/app/services/Client/client.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  displayedColumns: string[] = ['name', 'identity', 'view'];
  dataSource = new MatTableDataSource<Client>();
  filterInfo: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private dialog: MatDialog, private clientServ: ClientService,
              private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.clientServ.requestRefresh.subscribe(() => {this.getClients(); });
    this.getClients();
  }

  addClient(){
    const addClientDialog = this.dialog.open(AddClientComponent, {disableClose: true});
  }
  filterClients(filter) {
    this.dataSource.filter = filter;
  }

  viewClient(client: Client){
    const viewClientDialog = this.dialog.open(ViewClientComponent, {
      data: {viewClient: client}
    });
  }

  getClients() {
    const user = JSON.parse(localStorage.getItem('user'));

    this.clientServ.readClients(this.globalService.GetServer()).subscribe((result: any) => {
      if (result.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      } else {
        this.dataSource = new MatTableDataSource(result.Clients);
        this.dataSource.paginator = this.paginator;
        localStorage.setItem('user', JSON.stringify(result.Session));
      }
    });
  }
}
