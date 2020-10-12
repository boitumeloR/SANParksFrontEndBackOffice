import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {UpdateSeasonConfirmationComponent} from 'src/app/modals/season/update-season-confirmation/update-season-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { SeasonService, Season } from 'src/app/services/Season/season.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-update-season',
  templateUrl: './update-season.component.html',
  styleUrls: ['./update-season.component.scss']
})
export class UpdateSeasonComponent implements OnInit {
  updateSeasonForm: FormGroup;
  season: Season;
  startDate;
  endDate;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<UpdateSeasonComponent>, private seasonService: SeasonService,
              private globalService: GlobalService) { }

  ngOnInit(): void {
    this.season = JSON.parse(localStorage.getItem('season'));

    this.startDate = new Date(this.season.StartDate);
    this.endDate = new Date(this.season.EndDate);

    this.updateSeasonForm = this.formBuilder.group({
      seasonName: [this.season.SeasonName, Validators.required],
      startDate : [this.startDate, Validators.required],
      endDate : [this.endDate, Validators.required]
    });
  }

  updateSeason(){
    if (this.updateSeasonForm.invalid){
      this.displayValidationError();
    }
    else if (this.updateSeasonForm.get('startDate').value > this.updateSeasonForm.get('endDate').value){
      this.displayDateError();
    }
    else{
      this.dialogRef.close();
      const updateSeasonConfirmationDialog = this.dialog.open(UpdateSeasonConfirmationComponent);

      updateSeasonConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
            const user = JSON.parse(localStorage.getItem('user'));
            const newSeason = {
              SeasonID: this.season.SeasonID,
              seasonName: this.updateSeasonForm.get('seasonName').value,
              startDate: this.updateSeasonForm.get('startDate').value,
              endDate: this.updateSeasonForm.get('endDate').value,
              authenticateUser: user
            };

            this.seasonService.UpdateSeason(newSeason, this.globalService.GetServer());
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

  displayDateError() {
    this.validationErrorSnackBar.open('The date effective must be earlier than the end date. Please try again.', 'OK', {
      duration: 3500,
    });
  }
}
