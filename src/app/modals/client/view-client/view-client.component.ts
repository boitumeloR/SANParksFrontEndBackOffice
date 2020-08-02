import { Component, OnInit } from '@angular/core';
import { UpdateClientComponent} from 'src/app/modals/client/update-client/update-client.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateClient(){
    const updateEmployeeDialog = this.dialog.open(UpdateClientComponent,{disableClose: true})
  }
}
