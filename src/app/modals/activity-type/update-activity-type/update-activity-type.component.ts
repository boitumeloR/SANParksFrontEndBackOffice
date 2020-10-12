import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateActivityTypeConfirmationComponent } from 'src/app/modals/activity-type/update-activity-type-confirmation/update-activity-type-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/Global/global.service';
import { ActivityTypeService, ActivityType } from 'src/app/services/ActivityType/activity-type.service';
@Component({
  selector: 'app-update-activity-type',
  templateUrl: './update-activity-type.component.html',
  styleUrls: ['./update-activity-type.component.scss']
})

export class UpdateActivityTypeComponent implements OnInit {
  updateActivityTypes: FormGroup;
  activityType: ActivityType;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateActivityTypeComponent>,
              private globalService: GlobalService, private activityTypeService: ActivityTypeService) { }

  ngOnInit(): void {
    this.activityType = JSON.parse(localStorage.getItem('activityType'));

    this.updateActivityTypes = this.formBuilder.group({
      description: [this.activityType.ActivityTypeDescription, Validators.required],
    });
  }

  updateActivityType(){
    if (this.updateActivityTypes.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const updateActivityTypeConfirmDialog = this.dialog.open(UpdateActivityTypeConfirmationComponent);

      updateActivityTypeConfirmDialog.afterClosed().subscribe( result => {
        if (result === true){
           const user = JSON.parse(localStorage.getItem('user'));

           const activityType = {
            ActivityTypeID: this.activityType.ActivityTypeID,
            ActivityTypeDescription: this.updateActivityTypes.get('description').value,
            authenticateUser: user
          };
           this.activityTypeService.updateActivityType(activityType, this.globalService.GetServer());
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
