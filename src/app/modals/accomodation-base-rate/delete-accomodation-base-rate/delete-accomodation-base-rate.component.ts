import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate-successful/delete-accomodation-add-rate-successful.component';
import {DeleteAccomodationBaseRateUnsuccessfulComponent} from 'src/app/modals/accomodation-base-rate/delete-accomodation-base-rate-unsuccessful/delete-accomodation-base-rate-unsuccessful.component';

@Component({
  selector: 'app-delete-accomodation-base-rate',
  templateUrl: './delete-accomodation-base-rate.component.html',
  styleUrls: ['./delete-accomodation-base-rate.component.scss']
})
export class DeleteAccomodationBaseRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteAccomodationAddRate(){
    const deleteAccomodationAddRateSuccessfulDialog = this.dialog.open(DeleteAccomodationAddRateSuccessfulComponent);
  }

  unsuccessfulDeleteAccomodationAddRate(){
    const deleteAccomodationAddRateUnsuccessfulDialog = this.dialog.open(DeleteAccomodationBaseRateUnsuccessfulComponent);
  }
}
