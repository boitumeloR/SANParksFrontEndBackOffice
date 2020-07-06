import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/add-accomodation-type-successful/add-accomodation-type-successful.component';

@Component({
  selector: 'app-add-accomodation-type-confirmation',
  templateUrl: './add-accomodation-type-confirmation.component.html',
  styleUrls: ['./add-accomodation-type-confirmation.component.scss']
})
export class AddAccomodationTypeConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddAccomodationType(){
    const addAccomodationTypeSuccessfulDialog = this.dialog.open(AddAccomodationTypeSuccessfulComponent);
  }
}
