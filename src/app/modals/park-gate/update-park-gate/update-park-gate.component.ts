import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateParkGateConfirmationComponent} from 'src/app/modals/park-gate/update-park-gate-confirmation/update-park-gate-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkGate, ParkGateService } from 'src/app/services/ParkGate/park-gate.service';
import { ParkDropdown, ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-update-park-gate',
  templateUrl: './update-park-gate.component.html',
  styleUrls: ['./update-park-gate.component.scss']
})
export class UpdateParkGateComponent implements OnInit {
  updateParkGateForm: FormGroup;
  parkGate: ParkGate;
  parkDropDown: ParkDropdown;
  currentPark;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateParkGateComponent>, private parkGateService: ParkGateService,
              private globalService: GlobalService, private parkService: ParkService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
      this.parkDropDown = result.Parks;
    });

    this.parkGate = JSON.parse(localStorage.getItem('parkGate'));

    this.updateParkGateForm = this.formBuilder.group({
      parkGateName: [this.parkGate.ParkGateName, Validators.required],
      park : [this.parkGate.ParkID, Validators.required],
      parkGateLimit : [this.parkGate.ParkGateMax, [Validators.required, Validators.min(1)]],
      parkGateLatitude : [this.parkGate.ParkGateLatitude, Validators.required],
      parkGateLongitude: [this.parkGate.ParkGateLongitude, Validators.required],
      parkGateDescription: [this.parkGate.ParkGateDescription, Validators.required]
    });
  }

  updateParkGate(){
    if (this.updateParkGateForm.invalid){
      this.displayValidationError();
    }
    else{
      const numbers = /^[0-9\.]+$/;
      if (this.updateParkGateForm.get('parkGateLongitude').value.match(numbers) &&
            this.updateParkGateForm.get('parkGateLatitude').value.match(numbers)){
      this.dialogRef.close();
      const confirmupdateDialog = this.dialog.open(UpdateParkGateConfirmationComponent);

      confirmupdateDialog.afterClosed().subscribe(result => {
          if (result === true){
            const parkGate = {
              ParkGateID: this.parkGate.ParkGateID,
              ParkGateName: this.updateParkGateForm.get('parkGateName').value,
              ParkID: this.updateParkGateForm.get('park').value,
              ParkGateMax: this.updateParkGateForm.get('parkGateLimit').value,
              ParkGateLatitude: this.updateParkGateForm.get('parkGateLatitude').value,
              ParkGateLongitude: this.updateParkGateForm.get('parkGateLongitude').value,
              ParkGateDescription: this.updateParkGateForm.get('parkGateDescription').value,
            };

            this.parkGateService.UpdateParkGate(parkGate, this.globalService.GetServer());
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
