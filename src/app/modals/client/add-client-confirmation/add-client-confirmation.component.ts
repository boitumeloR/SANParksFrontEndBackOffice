import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddClientSuccessfulComponent} from 'src/app/modals/client/add-client-successful/add-client-successful.component';
import {AddClientUnsuccesfulComponent} from 'src/app/modals/client/add-client-unsuccesful/add-client-unsuccesful.component';


@Component({
  selector: 'app-add-client-confirmation',
  templateUrl: './add-client-confirmation.component.html',
  styleUrls: ['./add-client-confirmation.component.scss']
})
export class AddClientConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddClient(){
    const addClientSuccessfulDialog = this.dialog.open(AddClientSuccessfulComponent);
  }

  unsuccessfulAddClient(){
    const addClientUnsuccessfulDialog = this.dialog.open(AddClientUnsuccesfulComponent);
  }
}
