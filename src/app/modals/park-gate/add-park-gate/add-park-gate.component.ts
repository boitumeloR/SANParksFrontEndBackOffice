import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkGateConfirmationComponent} from 'src/app/modals/park-gate/add-park-gate-confirmation/add-park-gate-confirmation.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { ParkService, ParkDropdown } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ParkGate, ParkGateService } from 'src/app/services/ParkGate/park-gate.service';

@Component({
  selector: 'app-add-park-gate',
  templateUrl: './add-park-gate.component.html',
  styleUrls: ['./add-park-gate.component.scss']
})
export class AddParkGateComponent implements OnInit {
  addParkGateForm: FormGroup;
  parkDropDown;
  newParKGate: ParkGate;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddParkGateComponent>, private parkService: ParkService,
              private globalService: GlobalService, private parkGateService: ParkGateService) { }

  ngOnInit(): void {
    this.parkService.ReadPark(this.globalService.GetServer()).subscribe((result: any) => {
        this.parkDropDown = result.Parks;
    });

    this.addParkGateForm = this.formBuilder.group({
      parkGateName: ['', Validators.required],
      park : ['', Validators.required],
      parkGateLimit : ['', [Validators.required, Validators.min(1)]],
      parkGateLatitude : ['', Validators.required],
      parkGateLongitude: ['', Validators.required],
      parkGateDescription: ['', Validators.required]
    });
  }

  addParkGate(){
    if (this.addParkGateForm.invalid){
      this.displayValidationError();
    }
    else{
      const numbers = /^[0-9\.-]+$/;
      if (String(this.addParkGateForm.get('parkGateLongitude').value).match(numbers) &&
            String(this.addParkGateForm.get('parkGateLatitude').value).match(numbers)){
      this.dialogRef.close();
      const addParkGateConfirmationDialog = this.dialog.open(AddParkGateConfirmationComponent);

      addParkGateConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
          const user = JSON.parse(localStorage.getItem('user'));
          const newParkGate = {
            ParkGateName: this.addParkGateForm.get('parkGateName').value,
            ParkID: this.addParkGateForm.get('park').value,
            ParkGateMax: this.addParkGateForm.get('parkGateLimit').value,
            ParkGateLatitude: this.addParkGateForm.get('parkGateLatitude').value,
            ParkGateLongitude: this.addParkGateForm.get('parkGateLongitude').value,
            ParkGateDescription: this.addParkGateForm.get('parkGateDescription').value,
            authenticateUser: user
          };

          this.parkGateService.CreateParkGate(newParkGate, this.globalService.GetServer());
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
