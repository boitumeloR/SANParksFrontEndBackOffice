import { Component, OnInit } from '@angular/core';
import {UpdateAccomodationConfirmationComponent} from 'src/app/modals/accomodation/update-accomodation-confirmation/update-accomodation-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-update-accomodation',
  templateUrl: './update-accomodation.component.html',
  styleUrls: ['./update-accomodation.component.scss']
})
export class UpdateAccomodationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  updateAccomdation(){
    const updateAccomodationDialog = this.dialog.open(UpdateAccomodationConfirmationComponent)
  }
}
