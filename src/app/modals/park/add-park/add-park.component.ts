import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkConfirmationComponent} from 'src/app/modals/park/add-park-confirmation/add-park-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Park, ParkService } from 'src/app/services/Park/park.service';
import {GlobalService} from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-add-park',
  templateUrl: './add-park.component.html',
  styleUrls: ['./add-park.component.scss']
})
export class AddParkComponent implements OnInit {
  addParkForm: FormGroup;
  newPark: Park;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddParkComponent>, private parkService: ParkService, private globalService: GlobalService) { }

  ngOnInit(): void {

    this.addParkForm = this.formBuilder.group({
      parkName: ['', Validators.required],
      parkLimit : ['', [Validators.required, Validators.min(1)]],
      parkLatitude : ['', Validators.required],
      parkLongitude : ['', Validators.required],
      parkDescription : ['', Validators.required]
    });
  }

  addPark(){
    if (this.addParkForm.invalid){
      this.displayValidationError();
    }
    else{
      const numbers = /^[0-9\.-]+$/;
      if (this.addParkForm.get('parkLongitude').value.match(numbers) && this.addParkForm.get('parkLatitude').value.match(numbers)){
        this.dialogRef.close();
        const addParkConfirmationDiag = this.dialog.open(AddParkConfirmationComponent);

        addParkConfirmationDiag.afterClosed().subscribe( result => {
          if (result === true){
             const user = JSON.parse(localStorage.getItem('user'));

             const newPark = {
              ParkName: this.addParkForm.get('parkName').value,
              ParkLimit: this.addParkForm.get('parkLimit').value,
              ParkLatitude: this.addParkForm.get('parkLatitude').value,
              ParkLongitude: this.addParkForm.get('parkLongitude').value,
              ParkDescription: this.addParkForm.get('parkDescription').value,
              authenticateUser: user
            };
             this.parkService.CreatePark(newPark, this.globalService.GetServer());
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
