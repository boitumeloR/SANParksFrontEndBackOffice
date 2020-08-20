import { Component, OnInit } from '@angular/core';
import { CancelAlertComponent} from 'src/app/modals/auxilliary-modals/cancel-alert/cancel-alert.component';
import {AddSeasonConfirmationComponent} from 'src/app/modals/season/add-season-confirmation/add-season-confirmation.component';
import {MatDialog} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { Season, SeasonService } from 'src/app/services/Season/season.service';
import { GlobalService } from 'src/app/services/Global/global.service';
@Component({
  selector: 'app-add-season',
  templateUrl: './add-season.component.html',
  styleUrls: ['./add-season.component.scss']
})
export class AddSeasonComponent implements OnInit {
  addSeasonForm: FormGroup;
  newSeason: Season;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private validationErrorSnackBar: MatSnackBar,
              private dialogRef: MatDialogRef<AddSeasonComponent>, private seasonService: SeasonService,
              private  globalService: GlobalService) { }

  ngOnInit(): void {
    this.addSeasonForm = this.formBuilder.group({
      seasonName: ['', Validators.required],
      startDate : ['', Validators.required],
      endDate : ['', Validators.required]
    });
  }

  addSeason(){
    if (this.addSeasonForm.invalid){
      this.displayValidationError();
    }
    else{
      this.dialogRef.close();
      const addSeasonConfirmationDialog = this.dialog.open(AddSeasonConfirmationComponent);

      addSeasonConfirmationDialog.afterClosed().subscribe(result => {
        if (result === true){
            const newSeason = {
              seasonName: this.addSeasonForm.get('seasonName').value,
              startDate: this.addSeasonForm.get('startDate').value,
              endDate: this.addSeasonForm.get('endDate').value
            };

            this.seasonService.CreateSeason(newSeason, this.globalService.GetServer());
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
