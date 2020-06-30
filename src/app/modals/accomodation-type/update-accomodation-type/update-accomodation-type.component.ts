import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {UpdateAccomodationTypeConfirmationComponent} from 'src/app/modals/accomodation-type/update-accomodation-type-confirmation/update-accomodation-type-confirmation.component';

@Component({
  selector: 'app-update-accomodation-type',
  templateUrl: './update-accomodation-type.component.html',
  styleUrls: ['./update-accomodation-type.component.scss']
})
export class UpdateAccomodationTypeComponent implements OnInit {

  basicUpdateAccomodationTypeDetails: FormGroup;
  udpateCampsForAccomodationType: FormGroup;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateAccomodationType(){
    const addAccomodationTypeConfirmationDialog = this.dialog.open(UpdateAccomodationTypeConfirmationComponent)
  }
}
