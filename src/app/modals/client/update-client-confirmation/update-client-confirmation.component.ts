import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateClientSuccessfulComponent} from 'src/app/modals/client/update-client-successful/update-client-successful.component';
import {UpdateClientUnsuccessfulComponent} from 'src/app/modals/client/update-client-unsuccessful/update-client-unsuccessful.component';

@Component({
  selector: 'app-update-client-confirmation',
  templateUrl: './update-client-confirmation.component.html',
  styleUrls: ['./update-client-confirmation.component.scss']
})
export class UpdateClientConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  successfulUpdateClient(){
    const updateClientSuccessfulDialog = this.dialog.open(UpdateClientSuccessfulComponent);
  }

  unsuccessfulUpdateClient(){
    const updateClientUnsuccessfulDialog = this.dialog.open(UpdateClientUnsuccessfulComponent);
  }
}
