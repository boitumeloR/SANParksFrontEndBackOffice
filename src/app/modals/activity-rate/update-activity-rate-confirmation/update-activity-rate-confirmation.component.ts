import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UpdateActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/update-activity-rate-successful/update-activity-rate-successful.component';
import { UpdateActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/update-activity-rate-unsuccessful/update-activity-rate-unsuccessful.component';

@Component({
  selector: 'app-update-activity-rate-confirmation',
  templateUrl: './update-activity-rate-confirmation.component.html',
  styleUrls: ['./update-activity-rate-confirmation.component.scss']
})
export class UpdateActivityRateConfirmationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  successfulUpdateActivityRate(){
    const updateActivityRateSuccessfulDialog = this.dialog.open(UpdateActivityRateSuccessfulComponent);
  }

  unsuccessfulUpdateActivityRate(){
    const updateActivityRateUnsuccessfulDialog = this.dialog.open(UpdateActivityRateUnsuccessfulComponent);
  }
}
