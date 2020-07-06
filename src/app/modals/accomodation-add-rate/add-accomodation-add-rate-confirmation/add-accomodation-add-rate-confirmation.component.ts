import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-successful/add-accomodation-add-rate-successful.component';
@Component({
  selector: 'app-add-accomodation-add-rate-confirmation',
  templateUrl: './add-accomodation-add-rate-confirmation.component.html',
  styleUrls: ['./add-accomodation-add-rate-confirmation.component.scss']
})
export class AddAccomodationAddRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddAccomodationAddRate(){
    const addAccomodationAddRateSuccessfulDialog = this.dialog.open(AddAccomodationAddRateSuccessfulComponent);
  }
}
