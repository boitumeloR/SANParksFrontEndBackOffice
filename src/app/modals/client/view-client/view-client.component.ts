import { Component, Inject, OnInit } from '@angular/core';
import { UpdateClientComponent} from 'src/app/modals/client/update-client/update-client.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/Login/login.service';
import { tap } from 'rxjs/operators';
import { Client } from 'src/app/services/Client/client.service';
@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  roleID: number;
  client: Client;
  constructor(private dialog: MatDialog, private loginService: LoginService,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.client = this.data.viewClient;
    this.loginService.UserRoles.pipe( tap(XX => {
      this.roleID = XX as number;
    })).subscribe();
  }

  updateClient(){
    const updateEmployeeDialog = this.dialog.open(UpdateClientComponent, {disableClose: true});
  }

  makeBooking() {
    
  }
}
