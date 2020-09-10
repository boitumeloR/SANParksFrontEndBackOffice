import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddDailyConservationFeeConfirmationComponent} from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-confirmation/add-daily-conservation-fee-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { DailyConservationFeeService, DailyConservationFee } from 'src/app/services/DailyConservationFee/daily-conservation-fee.service';
@Component({
  selector: 'app-add-daily-conservation-fee',
  templateUrl: './add-daily-conservation-fee.component.html',
  styleUrls: ['./add-daily-conservation-fee.component.scss']
})
export class AddDailyConservationFeeComponent implements OnInit {
  addDailyConservationFeeForm: FormGroup;
  parkDropDown;
  regionDropDown;
  newDailyConservationFee: DailyConservationFee;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddDailyConservationFeeComponent>, private parkService: ParkService,
              private globalService: GlobalService, private dailyConservationFeeService: DailyConservationFeeService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));
    });

    this.dailyConservationFeeService.GetRegions(this.globalService.GetServer()).subscribe((result: any) => {
      this.regionDropDown = result;
    });

    this.addDailyConservationFeeForm = this.formBuilder.group({
      park: ['', Validators.required],
      region : ['', Validators.required],
      childAmount : ['', [Validators.required, Validators.min(1)]],
      adultAmount : ['', [Validators.required, Validators.min(1)]],
      dateEffective: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  addDailyConservationFee(){
    if (this.addDailyConservationFeeForm.invalid){
      this.displayValidationError();
    }
    else if (this.addDailyConservationFeeForm.get('endDate').value < this.addDailyConservationFeeForm.get('dateEffective').value){
      this.displayDateError();
    }
    else{
      this.dialogRef.close();
      const addDailyConservationFeeConfirmation = this.dialog.open(AddDailyConservationFeeConfirmationComponent);

      addDailyConservationFeeConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));

          const newDailyConservationFee = {
            ParkID: this.addDailyConservationFeeForm.get('park').value,
            RegionID: this.addDailyConservationFeeForm.get('region').value,
            ChildAmount: this.addDailyConservationFeeForm.get('childAmount').value,
            AdultAmount: this.addDailyConservationFeeForm.get('adultAmount').value,
            DateEffective: this.addDailyConservationFeeForm.get('dateEffective').value,
            EndDate: this.addDailyConservationFeeForm.get('endDate').value,
            authenticateUser: user
          };

          this.dailyConservationFeeService.CreateDailyConservationFee(newDailyConservationFee, this.globalService.GetServer());
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
