import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddWildcardRateSuccessfulComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-successful/add-wildcard-rate-successful.component';
import {AddWildcardRateUnsuccessfulComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-unsuccessful/add-wildcard-rate-unsuccessful.component';


@Component({
  selector: 'app-add-wildcard-rate-confirmation',
  templateUrl: './add-wildcard-rate-confirmation.component.html',
  styleUrls: ['./add-wildcard-rate-confirmation.component.scss']
})
export class AddWildcardRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulAddWildcardRate(){
    const addWildcardRateSuccessfulDialog = this.dialog.open(AddWildcardRateSuccessfulComponent);
  }

  unsuccessfulAddWildcardRate(){
    const addWildcardRateUnsuccessfulDialog = this.dialog.open(AddWildcardRateUnsuccessfulComponent);
  }
}
