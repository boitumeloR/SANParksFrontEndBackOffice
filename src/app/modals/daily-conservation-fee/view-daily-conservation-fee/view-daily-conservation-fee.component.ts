import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UpdateDailyConservationFeeComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee/update-daily-conservation-fee.component';
import {DeleteDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/delete-daily-conservation-fee-confirmation/delete-daily-conservation-fee-confirmation.component';
import { DailyConservationFeeService, DailyConservationFee } from 'src/app/services/DailyConservationFee/daily-conservation-fee.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-view-daily-conservation-fee',
  templateUrl: './view-daily-conservation-fee.component.html',
  styleUrls: ['./view-daily-conservation-fee.component.scss']
})
export class ViewDailyConservationFeeComponent implements OnInit {
  dailyConservationFee: DailyConservationFee;
  constructor(private dialog: MatDialog, private dailyConservationFeeServie: DailyConservationFeeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.dailyConservationFee = JSON.parse(localStorage.getItem('dailyConservationFee'));
  }

  updateDailyConservationFee(){
    const updateDailyConservationFeeDialog = this.dialog.open(UpdateDailyConservationFeeComponent);
  }

  deleteDailyConservationFee(){
    const deleteDailyConservationFeeDialog = this.dialog.open(DeleteDailyConservationFeeConfirmationComponent);

    deleteDailyConservationFeeDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dailyConservationFeeServie.DeleteDailyConservationFee(this.globalService.GetServer(),
        this.dailyConservationFee.ConservationID);
      }
    });
  }
}
