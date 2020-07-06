import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DeleteAccomodationTypeSuccessfulComponent} from 'src/app/modals/accomodation-type/delete-accomodation-type-successful/delete-accomodation-type-successful.component';

@Component({
  selector: 'app-delete-accomodation-type',
  templateUrl: './delete-accomodation-type.component.html',
  styleUrls: ['./delete-accomodation-type.component.scss']
})
export class DeleteAccomodationTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulDeleteAccomodationType(){
    const deleteAccomodationTypeSuccessfulDialog = this.dialog.open(DeleteAccomodationTypeSuccessfulComponent);
  }
}
