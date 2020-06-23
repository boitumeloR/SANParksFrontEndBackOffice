import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddWildcardRateConfirmationComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-confirmation/add-wildcard-rate-confirmation.component'

@Component({
  selector: 'app-add-wildcard-rate',
  templateUrl: './add-wildcard-rate.component.html',
  styleUrls: ['./add-wildcard-rate.component.scss']
})
export class AddWildcardRateComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addWildcardRate(){
    const addWildcardRateConfirmation = this.dialog.open(AddWildcardRateConfirmationComponent);
  }
}
