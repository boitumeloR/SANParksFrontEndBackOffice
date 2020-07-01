import { Component, OnInit } from '@angular/core';
import { UpdateAccomodationAddRateConfirmationComponent } from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-confirmation/update-accomodation-add-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-accomodation-add-rate',
  templateUrl: './update-accomodation-add-rate.component.html',
  styleUrls: ['./update-accomodation-add-rate.component.scss']
})
export class UpdateAccomodationAddRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAccomodationAddRate(){
    const updateAccomodationAddRateConfirmation = this.dialog.open(UpdateAccomodationAddRateConfirmationComponent);
  }
}
