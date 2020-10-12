import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-confirmation/update-daily-conservation-fee-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { DailyConservationFee, DailyConservationFeeService } from 'src/app/services/DailyConservationFee/daily-conservation-fee.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkService } from 'src/app/services/Park/park.service';
@Component({
  selector: 'app-update-daily-conservation-fee',
  templateUrl: './update-daily-conservation-fee.component.html',
  styleUrls: ['./update-daily-conservation-fee.component.scss']
})
export class UpdateDailyConservationFeeComponent implements OnInit {
  updateDailyConservationFeeForm: FormGroup;
  dailyConservationFee: DailyConservationFee;
  parkDropDown;
  regionDropDown;
  startDate;
  endDate;
  listOfYears = [];
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateDailyConservationFeeComponent>,
              private dailyConservationFeeService: DailyConservationFeeService, private parkService: ParkService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.dailyConservationFee = JSON.parse(localStorage.getItem('dailyConservationFee'));

    let year = new Date().getFullYear();
    const limitYear = year + 4;
    while (year <= limitYear){
      this.listOfYears.push(year);
      year += 1;
     }

    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
    });

    this.dailyConservationFeeService.GetRegions(this.globalService.GetServer()).subscribe((result: any) => {
      this.regionDropDown = result;
    });

    this.updateDailyConservationFeeForm = this.formBuilder.group({
      park: [ this.dailyConservationFee.ParkID, Validators.required],
      region : [ this.dailyConservationFee.RegionID, Validators.required],
      childAmount : [ this.dailyConservationFee.ChildAmount, [Validators.required, Validators.min(1)]],
      adultAmount : [ this.dailyConservationFee.AdultAmount, [Validators.required, Validators.min(1)]],
      dateEffective: [ this.dailyConservationFee.yearActive, Validators.required]
    });
  }

  updateDailyConservationFee(){
    if (this.updateDailyConservationFeeForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateDailyConservationFeeConfirmationDialog =  this.dialog.open(UpdateDailyConservationFeeConfirmationComponent);

      updateDailyConservationFeeConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));
          const dailyConservationFee = {
            ConservationID: this.dailyConservationFee.ConservationID,
            ParkID: this.updateDailyConservationFeeForm.get('park').value,
            RegionID: this.updateDailyConservationFeeForm.get('region').value,
            ChildAmount: this.updateDailyConservationFeeForm.get('childAmount').value,
            AdultAmount: this.updateDailyConservationFeeForm.get('adultAmount').value,
            DateEffective: this.updateDailyConservationFeeForm.get('dateEffective').value,
            authenticateUser: user
          };

          this.dailyConservationFeeService.UpdateDailyConservationFee(dailyConservationFee, this.globalService.GetServer());
        }
      });
    }
  }

  confirmCancel(){
    const confirmCancelDialog = this.dialog.open(CancelAlertComponent);
    confirmCancelDialog.afterClosed().subscribe(result => {
      if (result === true){
        this.dialogRef.close();
      }
    });
  }

  displayValidationError() {
    this.validationErrorSnackBar.open('The entered details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }

  displayDateError() {
    this.validationErrorSnackBar.open('The date effective must be earlier or equal than the end date. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
