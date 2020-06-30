import { Component, OnInit } from '@angular/core';
import {AddAccomodationConfirmationComponent} from 'src/app/modals/accomodation/add-accomodation-confirmation/add-accomodation-confirmation.component';
import {MatDialog} from '@angular/material/dialog'
@Component({
  selector: 'app-add-accomodation',
  templateUrl: './add-accomodation.component.html',
  styleUrls: ['./add-accomodation.component.scss']
})
export class AddAccomodationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addAccomdation(){
    const addAccomodationConfirmation = this.dialog.open(AddAccomodationConfirmationComponent);
  }
}
