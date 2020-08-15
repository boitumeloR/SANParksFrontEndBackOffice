import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateParkConfirmationComponent} from 'src/app/modals/park/update-park-confirmation/update-park-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Park, ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-update-park',
  templateUrl: './update-park.component.html',
  styleUrls: ['./update-park.component.scss']
})
export class UpdateParkComponent implements OnInit {
  updateParkForm: FormGroup;
  park: Park;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateParkComponent>, private parkService: ParkService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.park = JSON.parse(localStorage.getItem('park'));

    this.updateParkForm = this.formBuilder.group({
      parkName: [this.park.ParkName, Validators.required],
      parkLimit : [this.park.ParkLimit, [Validators.required, Validators.min(1)]],
      parkLatitude : [this.park.ParkLatitude, Validators.required],
      parkLongitude : [this.park.ParkLongitude, Validators.required],
      parkDescription : [this.park.ParkDescription, Validators.required]
    });
  }

  updatePark(){
    if (this.updateParkForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateParkConfirmDialog = this.dialog.open(UpdateParkConfirmationComponent);

      updateParkConfirmDialog.afterClosed().subscribe( result => {
        if (result === true){
           const park = {
            ParkID: this.park.ParkID,
            ParkName: this.updateParkForm.get('parkName').value,
            ParkLimit: this.updateParkForm.get('parkLimit').value,
            ParkLatitude: this.updateParkForm.get('parkLatitude').value,
            ParkLongitude: this.updateParkForm.get('parkLongitude').value,
            ParkDescription: this.updateParkForm.get('parkDescription').value
          };
           this.parkService.UpdatePark(park, this.globalService.GetServer());
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
