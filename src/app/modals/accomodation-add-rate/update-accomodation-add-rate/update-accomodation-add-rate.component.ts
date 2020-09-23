import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import { UpdateAccomodationAddRateConfirmationComponent } from 'src/app/modals/accomodation-add-rate/update-accomodation-add-rate-confirmation/update-accomodation-add-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AccommAddRateService } from 'src/app/services/AccommAddRate/accomm-add-rate.service';
@Component({
  selector: 'app-update-accomodation-add-rate',
  templateUrl: './update-accomodation-add-rate.component.html',
  styleUrls: ['./update-accomodation-add-rate.component.scss']
})
export class UpdateAccomodationAddRateComponent implements OnInit {
  updateAccomodationRateForm: FormGroup;
  accommodationTypeDropDown;
  addRate;
  startDate;
  listOfYears = [];
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateAccomodationAddRateComponent>, private addRateService: AccommAddRateService,
              private accommodationTypeService: AccommodationTypeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    let year = new Date().getFullYear();
    const limitYear = year + 4;
    while (year <= limitYear){
      this.listOfYears.push(year);
      year += 1;
     }
    this.addRate = JSON.parse(localStorage.getItem('addRate'));

    this.accommodationTypeService.readAccommodationType(this.globalService.GetServer()).subscribe((result: any) => {
      this.accommodationTypeDropDown = result.AccommodationTypes;
      localStorage.setItem('user', JSON.stringify(result.user));
    });

    this.updateAccomodationRateForm = this.formBuilder.group({
      accomodationType: [this.addRate.AccTypeID, Validators.required],
      adultRate : [this.addRate.AdultRateAmount, [Validators.required, Validators.min(1)]],
      childRate : [this.addRate.ChildRateAmount, [Validators.required, Validators.min(1)]],
      dateEffective : [this.addRate.yearActive, Validators.required]
    });
  }

  updateAccomodationAddRate(){
  if (this.updateAccomodationRateForm.invalid){
    this.displayValidationError();
  }
  else{
    this.dialogRef.close();
    const updateAccomodationAddRateConfirmation = this.dialog.open(UpdateAccomodationAddRateConfirmationComponent);

    updateAccomodationAddRateConfirmation.afterClosed().subscribe(result => {
      if (result === true){
        const user = JSON.parse(localStorage.getItem('user'));

        const updatedAccommodationAddRate = {
          AddRateID: this.addRate.AddRateID,
          AccomodationTypeID: this.updateAccomodationRateForm.get('accomodationType').value,
          AdultRateAmount: this.updateAccomodationRateForm.get('adultRate').value,
          ChildRateAmount: this.updateAccomodationRateForm.get('childRate').value,
          DateEffective: this.updateAccomodationRateForm.get('dateEffective').value,
          authenticateUser: user
        };
        this.addRateService.updateAccommodationTypeAddRate(updatedAccommodationAddRate, this.globalService.GetServer());
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
}
