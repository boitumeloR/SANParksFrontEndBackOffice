import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateWildcardRateSuccessfulComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate-successful/update-wildcard-rate-successful.component';
import {UpdateWildcardRateUnsuccessfulComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate-unsuccessful/update-wildcard-rate-unsuccessful.component';


@Component({
  selector: 'app-update-wildcard-rate-confirmation',
  templateUrl: './update-wildcard-rate-confirmation.component.html',
  styleUrls: ['./update-wildcard-rate-confirmation.component.scss']
})
export class UpdateWildcardRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateWildcardRate(){
    const updateWildcardRateSuccessfulDialog = this.dialog.open(UpdateWildcardRateSuccessfulComponent);
  }

  unsuccessfulUpdateWildcardRate(){
    const updateWildcardRateUnsuccessfulDialog = this.dialog.open(UpdateWildcardRateUnsuccessfulComponent);
  }
}
