import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/update-accomodation-type-successful/update-accomodation-type-successful.component';

@Component({
  selector: 'app-update-accomodation-type-confirmation',
  templateUrl: './update-accomodation-type-confirmation.component.html',
  styleUrls: ['./update-accomodation-type-confirmation.component.scss']
})
export class UpdateAccomodationTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateAccomodationType(){
    const updateAccomodationTypeSuccessfulDialog = this.dialog.open(UpdateAccomodationTypeSuccessfulComponent);
  }
}
