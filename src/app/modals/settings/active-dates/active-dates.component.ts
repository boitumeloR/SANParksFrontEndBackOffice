import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from 'src/app/services/Global/global.service';
import { SettingsService } from 'src/app/services/Settings/settings.service';

@Component({
  selector: 'app-active-dates',
  templateUrl: './active-dates.component.html',
  styleUrls: ['./active-dates.component.scss']
})
export class ActiveDatesComponent implements OnInit {
  addDates: FormGroup;
  constructor(private formBuilder: FormBuilder, private validationErrorSnack: MatSnackBar,
              private globalService: GlobalService, private settingService: SettingsService) { }

  ngOnInit(): void {
    this.addDates = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate : ['', Validators.required]
    });
  }

  addActiveDates(){
    if (this.addDates.invalid){
      this.validationError();
    }
    else if (this.addDates.get('endDate').value < this.addDates.get('startDate').value){
      this.dateError();
    }
    else{
      const dateActive = {
        startDate: this.addDates.get('startDate').value,
        endDate: this.addDates.get('endDate').value
      };

      this.settingService.CreateActiveDate(dateActive, this.globalService.GetServer());
    }
  }

  dateError() {
    this.validationErrorSnack.open(`Start date should not be less than the end date.` , 'OK', {
      duration: 5000,
    });
  }

  validationError() {
    this.validationErrorSnack.open(`The entered details are not in the correct format. Please try again.` , 'OK', {
      duration: 5000,
    });
  }
}
