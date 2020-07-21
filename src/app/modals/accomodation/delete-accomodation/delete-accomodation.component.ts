import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteAccomodationSuccessfulComponent} from 'src/app/modals/accomodation/delete-accomodation-successful/delete-accomodation-successful.component';
import {DeleteAccomodationUnsuccessfulComponent} from 'src/app/modals/accomodation/delete-accomodation-unsuccessful/delete-accomodation-unsuccessful.component';

@Component({
  selector: 'app-delete-accomodation',
  templateUrl: './delete-accomodation.component.html',
  styleUrls: ['./delete-accomodation.component.scss']
})
export class DeleteAccomodationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteAccomodation(){
    const deleteAccomodationSuccessfulDialog = this.dialog.open(DeleteAccomodationSuccessfulComponent);
  }

  unsuccessfulDeleteAccomodation(){
    const deleteAccomodationUnsuccessfulDialog = this.dialog.open(DeleteAccomodationUnsuccessfulComponent);
  }
}
