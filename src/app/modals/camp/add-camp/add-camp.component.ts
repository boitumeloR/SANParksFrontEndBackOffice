import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddCampConfirmationComponent} from 'src/app/modals/camp/add-camp-confirmation/add-camp-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/Global/global.service';
import { CampService, Camp } from 'src/app/services/Camp/camp.service';
import { ParkService } from 'src/app/services/Park/park.service';
import { CampTypeService } from 'src/app/services/CampType/camp-type.service';
@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.scss']
})
export class AddCampComponent implements OnInit {
  addCampForm: FormGroup;
  parkDropDown;
  campTypeDropDown;
  newCamp: Camp;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddCampComponent>, private parkService: ParkService,
              private globalService: GlobalService, private campService: CampService, private campTypeService: CampTypeService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
      localStorage.setItem('user', JSON.stringify(result.user));

      this.campTypeService.ReadCampType(this.globalService.GetServer()).subscribe((resultCampType: any) => {
        this.campTypeDropDown = resultCampType.CampTypes;
        localStorage.setItem('user', JSON.stringify(resultCampType.user));
      });
    });

    this.addCampForm = this.formBuilder.group({
      campName: ['', Validators.required],
      campType : ['', Validators.required],
      park : ['', Validators.required],
      campDescription : ['', Validators.required],
      campLatitude: ['', Validators.required],
      campLongitude: ['', Validators.required]
    });
  }

  addCamp(){
    if (this.addCampForm.invalid){
      this.displayValidationError();
    }
    else{
      const numbers = /^[0-9\.]+$/;
      if (this.addCampForm.get('campLatitude').value.match(numbers) && this.addCampForm.get('campLongitude').value.match(numbers)){
        this.dialogRef.close();
        const addCampDialog = this.dialog.open(AddCampConfirmationComponent);

        addCampDialog.afterClosed().subscribe(result => {
          if (result === true){
            const user = JSON.parse(localStorage.getItem('user'));

            const newCamp = {
              CampName: this.addCampForm.get('campName').value,
              CampTypeID: this.addCampForm.get('campType').value,
              ParkID: this.addCampForm.get('park').value,
              CampDescription: this.addCampForm.get('campDescription').value,
              CampLatitude: this.addCampForm.get('campLatitude').value,
              CampLongitude: this.addCampForm.get('campLongitude').value,
              authenticateUser: user
            };

            this.campService.createCamp(newCamp, this.globalService.GetServer());
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
