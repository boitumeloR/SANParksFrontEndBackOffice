import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { DateRange } from '@fullcalendar/core';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {AddCampGateTimeSuccessfulComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-successful/add-camp-gate-time-successful.component';
import {AddCampGateTimeUnsuccessfulComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-unsuccessful/add-camp-gate-time-unsuccessful.component';
import {UpdateCampGateTimeSuccessfulComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-successful/update-camp-gate-time-successful.component';
import {UpdateCampGateTimeUnsuccessfulComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-unsuccessful/update-camp-gate-time-unsuccessful.component';
import { DeleteCampGateTimeSuccessfulComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time-successful/delete-camp-gate-time-successful.component';
import { DeleteCampGateTimeUnsuccessfulComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time-unsuccessful/delete-camp-gate-time-unsuccessful.component';
import { Router } from '@angular/router';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface CampGateTime{
  CampGateTimeID: number;
  CampID: number;
  ParkID: number;
  ParkName: string;
  CampName: string;
  CampOpenTime: TimeRanges;
  SeasonID: string;
  SeasonName: string;
  CampCloseTime: TimeRanges;
  startDate: DateRange;
  endDate: DateRange;
}

@Injectable({
  providedIn: 'root'
})
export class CampGateTimeService {

  constructor(private dialog: MatDialog , private http: HttpClient, private router: Router, private snackbar: MatSnackBar) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  createCampGateTime(CampGateTime, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/campGateTime/createCampGateTime`, CampGateTime).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addCampGateTimeUnsuccessfulDialog = this.dialog.open(AddCampGateTimeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addCampGateTimeSuccessfulDialog = this.dialog.open(AddCampGateTimeSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  readCampgateTime(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/campGateTime/getCampGateTime`, user);
  }
  updateCampGateTime(updatedCampGateTime, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/campGateTime/updateCampGateTime`, updatedCampGateTime).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateCampGateTimeUnsuccessfulDialog = this.dialog.open(UpdateCampGateTimeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateCampGateTimeSuccessfulDialog = this.dialog.open(UpdateCampGateTimeSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  deleteCampGateTime(user, CampGateTimeID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/campGateTime/deleteCampGateTime?campGateTimeID=${CampGateTimeID}`, user).
    subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampGateTimeUnsuccessfulDialog = this.dialog.open(DeleteCampGateTimeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteCampGateTimeSuccessfulDialog = this.dialog.open(DeleteCampGateTimeSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
}
