import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateCampConfirmationComponent} from 'src/app/modals/camp/update-camp-confirmation/update-camp-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { CampService, Camp } from 'src/app/services/Camp/camp.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { CampTypeService } from 'src/app/services/CampType/camp-type.service';
@Component({
  selector: 'app-update-camp',
  templateUrl: './update-camp.component.html',
  styleUrls: ['./update-camp.component.scss']
})
export class UpdateCampComponent implements OnInit {
  updateCampForm: FormGroup;
  parkDropDown;
  campTypeDropDown;
  camp: Camp;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateCampComponent>, private parkService: ParkService,
              private globalService: GlobalService, private campService: CampService, private campTypeService: CampTypeService) { }

  ngOnInit(): void {
    this.camp = JSON.parse(localStorage.getItem('camp'));
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;

      this.campTypeService.ReadCampType(this.globalService.GetServer()).subscribe((resultCampType: any) => {
        this.campTypeDropDown = resultCampType.CampTypes;
      });
    });

    this.updateCampForm = this.formBuilder.group({
      campName: [this.camp.CampName, Validators.required],
      campType : [this.camp.CampTypeID, Validators.required],
      park : [this.camp.ParkID, Validators.required],
      campLatitude: [this.camp.CampLatitude, Validators.required],
      campLongitude: [this.camp.CampLongitude, Validators.required],
      campDescription : [this.camp.CampDescription, Validators.required],
    });
  }

  updateCamp(){
    if (this.updateCampForm.invalid){
      this.displayValidationError();
    }
    else{
      const numbers = /^[0-9\.-]+$/;
      if (this.updateCampForm.get('campLatitude').value.match(numbers) && this.updateCampForm.get('campLongitude').value.match(numbers)){
        this.dialogRef.close();
        const udpateCampDialog = this.dialog.open(UpdateCampConfirmationComponent);

        udpateCampDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));
          const updatedCamp = {
            CampID: this.camp.CampID,
            CampName: this.updateCampForm.get('campName').value,
            CampTypeID: this.updateCampForm.get('campType').value,
            ParkID: this.updateCampForm.get('park').value,
            CampDescription: this.updateCampForm.get('campDescription').value,
            CampLatitude: this.updateCampForm.get('campLatitude').value,
            CampLongitude: this.updateCampForm.get('campLongitude').value,
            authenticateUser: user
          };

          this.campService.updateCamp(updatedCamp, this.globalService.GetServer());
        }
      });
      }
      else{
        this.displayValidationForCordinates();
      }
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

  displayValidationForCordinates() {
    this.validationErrorSnackBar.open('The latitude or longitude details are not in the correct format. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
