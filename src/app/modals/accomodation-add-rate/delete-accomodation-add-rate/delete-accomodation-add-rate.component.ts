import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate-successful/delete-accomodation-add-rate-successful.component';
import {DeleteAccomodationAddRateUnsuccessfulComponent} from 'src/app/modals/accomodation-add-rate/delete-accomodation-add-rate-unsuccessful/delete-accomodation-add-rate-unsuccessful.component';
@Component({
  selector: 'app-delete-accomodation-add-rate',
  templateUrl: './delete-accomodation-add-rate.component.html',
  styleUrls: ['./delete-accomodation-add-rate.component.scss']
})
export class DeleteAccomodationAddRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteAccomodationAddRate(){
    const deleteAccomodationAddRateSuccessfulDialog = this.dialog.open(DeleteAccomodationAddRateSuccessfulComponent);
  }

  unsuccessfulDeleteAccomodationAddRate(){
    const deleteAccomodationAddRateUnsuccessfulDialog = this.dialog.open(DeleteAccomodationAddRateUnsuccessfulComponent);
  }
}
