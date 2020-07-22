import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddParkSuccessfulComponent} from 'src/app/modals/park/add-park-successful/add-park-successful.component';
import {AddParkUnsuccessfulComponent} from 'src/app/modals/park/add-park-unsuccessful/add-park-unsuccessful.component';

@Component({
  selector: 'app-add-park-confirmation',
  templateUrl: './add-park-confirmation.component.html',
  styleUrls: ['./add-park-confirmation.component.scss']
})
export class AddParkConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddPark(){
    const addParkSuccessfulDialog = this.dialog.open(AddParkSuccessfulComponent);
  }

  unsuccessfulAddPark(){
    const addParkUnsuccessfulDialog = this.dialog.open(AddParkUnsuccessfulComponent);
  }
}