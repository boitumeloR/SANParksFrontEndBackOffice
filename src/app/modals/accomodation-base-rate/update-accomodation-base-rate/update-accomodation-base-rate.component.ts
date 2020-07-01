import { Component, OnInit } from '@angular/core';
import { UpdateAccomodationBaseRateConfirmationComponent } from 'src/app/modals/accomodation-base-rate/update-accomodation-base-rate-confirmation/update-accomodation-base-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-accomodation-base-rate',
  templateUrl: './update-accomodation-base-rate.component.html',
  styleUrls: ['./update-accomodation-base-rate.component.scss']
})
export class UpdateAccomodationBaseRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAccomodationBaseRate(){
    const updateAccomodationBaseRateConfirmation = this.dialog.open(UpdateAccomodationBaseRateConfirmationComponent);
  }
}
