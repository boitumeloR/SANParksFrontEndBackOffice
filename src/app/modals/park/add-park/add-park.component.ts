import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddParkConfirmationComponent} from 'src/app/modals/park/add-park-confirmation/add-park-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Park, ParkService } from 'src/app/services/Park/park.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import {AddParkSuccessfulComponent} from 'src/app/modals/park/add-park-successful/add-park-successful.component';
import {AddParkUnsuccessfulComponent} from 'src/app/modals/park/add-park-unsuccessful/add-park-unsuccessful.component';
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
      this.dialogRef.close();
      const addParkConfirmationDiag = this.dialog.open(AddParkConfirmationComponent);

      addParkConfirmationDiag.afterClosed().subscribe( result => {
        if (result === true){
           const newPark = {
            ParkName: this.addParkForm.get('parkName').value,
            ParkLimit: this.addParkForm.get('parkLimit').value,
            ParkLatitude: this.addParkForm.get('parkLatitude').value,
            ParkLongitude: this.addParkForm.get('parkLongitude').value,
            ParkDescription: this.addParkForm.get('parkDescription').value
          };
           this.parkService.CreatePark(newPark, this.globalService.GetServer()).subscribe((addResult: any) => {
            if (addResult.Error){
             const addParkUnsuccessfulDialog = this.dialog.open(AddParkUnsuccessfulComponent);
            }
            else{
             const addParkSuccessfulDialog = this.dialog.open(AddParkSuccessfulComponent);
            }
          });
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
