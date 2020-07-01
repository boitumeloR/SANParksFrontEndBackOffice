import { Component, OnInit } from '@angular/core';
import {AddAccomodationAddRateConfirmationComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-confirmation/add-accomodation-add-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-add-accomodation-add-rate',
  templateUrl: './add-accomodation-add-rate.component.html',
  styleUrls: ['./add-accomodation-add-rate.component.scss']
})
export class AddAccomodationAddRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAccomodationBaseRate(){
    const addAccomodationAddRateConfirmation = this.dialog.open(AddAccomodationAddRateConfirmationComponent);
  }
}
