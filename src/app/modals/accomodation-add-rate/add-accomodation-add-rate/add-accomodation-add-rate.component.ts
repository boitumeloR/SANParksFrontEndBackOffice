import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddAccomodationAddRateConfirmationComponent} from 'src/app/modals/accomodation-add-rate/add-accomodation-add-rate-confirmation/add-accomodation-add-rate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { AccommAddRateService } from 'src/app/services/AccommAddRate/accomm-add-rate.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AccommodationTypeService } from 'src/app/services/AccommodationType/accommodation-type.service';
@Component({
  selector: 'app-add-accomodation-add-rate',
  templateUrl: './add-accomodation-add-rate.component.html',
  styleUrls: ['./add-accomodation-add-rate.component.scss']
})
export class AddAccomodationAddRateComponent implements OnInit {
  addAccomodationRateForm: FormGroup;
  accommodationTypeDropDown;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddAccomodationAddRateComponent>, private addRateService: AccommAddRateService,
              private accommodationTypeService: AccommodationTypeService, private globalService: GlobalService) { }

  ngOnInit(): void {
    this.accommodationTypeService.readAccommodationType(this.globalService.GetServer()).subscribe((result: any) => {
      this.accommodationTypeDropDown = result.AccommodationTypes;
    });

    this.addAccomodationRateForm = this.formBuilder.group({
      accomodationType: ['', Validators.required],
      adultRate : ['', [Validators.required, Validators.min(1)]],
      childRate : ['', [Validators.required, Validators.min(1)]],
      dateEffective : ['', Validators.required]
    });
  }

  addAccomodationBaseRate(){
    if (this.addAccomodationRateForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addAccomodationAddRateConfirmation = this.dialog.open(AddAccomodationAddRateConfirmationComponent);

      addAccomodationAddRateConfirmation.afterClosed().subscribe(result => {
        if (result === true){
          const newAccommodationAddRate = {
            AccomodationTypeID: this.addAccomodationRateForm.get('accomodationType').value,
            AdultRateAmount: this.addAccomodationRateForm.get('adultRate').value,
            ChildRateAmount: this.addAccomodationRateForm.get('childRate').value,
            DateEffective: this.addAccomodationRateForm.get('dateEffective').value,
          };
          this.addRateService.createAccommodationTypeAddRate(newAccommodationAddRate, this.globalService.GetServer());
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
