import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateAccomodationAddRateSuccessfulComponent} from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-successful/update-accomodation-add-rate-successful.component';

@Component({
  selector: 'app-update-accomodation-add-rate-confirmation',
  templateUrl: './update-accomodation-add-rate-confirmation.component.html',
  styleUrls: ['./update-accomodation-add-rate-confirmation.component.scss']
})
export class UpdateAccomodationAddRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateAccomodationAddRate(){
    const updateAccomodationAddRateSuccessfulDialog = this.dialog.open(UpdateAccomodationAddRateSuccessfulComponent);
  }
}
