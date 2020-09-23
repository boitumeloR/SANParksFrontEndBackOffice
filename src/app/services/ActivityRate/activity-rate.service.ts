import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/add-activity-rate-successful/add-activity-rate-successful.component';
import {AddActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/add-activity-rate-unsuccessful/add-activity-rate-unsuccessful.component';
import { UpdateActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/update-activity-rate-successful/update-activity-rate-successful.component';
import { UpdateActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/update-activity-rate-unsuccessful/update-activity-rate-unsuccessful.component';
import { DeleteActivityRateSuccessfulComponent} from 'src/app/modals/activity-rate/delete-activity-rate-successful/delete-activity-rate-successful.component';
import { DeleteActivityRateUnsuccessfulComponent} from 'src/app/modals/activity-rate/delete-activity-rate-unsuccessful/delete-activity-rate-unsuccessful.component';
import {MatDialog} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface ActivityRate{
  ActivityRateID: number;
  ActivityID: number;
  CampID: number;
  RateTypeID: number;
  AdultRateAmount: number;
  ChildRateAmount: number;
  VehicleAmount: number;
  HutAmount: number;
  PersonAmount: number;
  BikeAmount: number;
  NoBikeAmount: number;
  startDate: Date;
  endDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityRateService {

  constructor(private dialog: MatDialog , private http: HttpClient,
              private router: Router,  private rateForYear: MatSnackBar) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createActivityRate(ActivityRate, link){
    return this.http.post(`${link}/api/activityRate/createActivityRate`, ActivityRate).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addActivityRateUnsuccessfulDialog = this.dialog.open(AddActivityRateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.RateForYearExists){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.rateExistsError(ActivityRate.DateEffective);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addActivityRateSuccessfulDialog = this.dialog.open(AddActivityRateSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  rateExistsError(year) {
    this.rateForYear.open(`An activty rate already exists for the activity in this camp, in the year ${year}.` , 'OK', {
      duration: 5000,
    });
  }
  readActivityRate(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/activityRate/getActivityRate`, user);
  }
  updateActivityRate(updatedActivityRate, link){
    return this.http.post(`${link}/api/activityRate/updateActivityRate`, updatedActivityRate).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateActivityRateUnsuccessfulDialog = this.dialog.open(UpdateActivityRateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.RateForYearExists){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.rateExistsError(updatedActivityRate.DateEffective);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateActivityRateSuccessfulDialog = this.dialog.open(UpdateActivityRateSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  deleteActivityRate(user, ActivityRateID, link){
    return this.http.post(`${link}/api/activityRate/deleteActivityRate?activityRateID=${ActivityRateID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivityRateUnsuccessfulDialog = this.dialog.open(DeleteActivityRateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteActivityRateSuccessfulDialog = this.dialog.open(DeleteActivityRateSuccessfulComponent);
        this.refresh.next();
      }
    });
  }
  readRateTypes(link){
    return this.http.get(`${link}/api/activityRate/getRateTypes`);
  }
}
