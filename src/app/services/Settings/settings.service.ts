import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient, private rateForYear: MatSnackBar, private router: Router,
              private dialog: MatDialog, private snackbar: MatSnackBar) { }

  serverDownSnack() {
    this.snackbar.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }
  CreateActiveDate(Date, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/settings/createActiveDates`, Date).subscribe((addResult: any) => {
      if (addResult.Error){
        this.errorSnack();
      }
      else{
        this.successsSnack();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  errorSnack() {
    this.rateForYear.open(`An error has been encountered. Please try again later.` , 'OK', {
      duration: 5000,
    });
  }

  successsSnack() {
    this.rateForYear.open(`Active dates have been successfully created.` , 'OK', {
      duration: 5000,
    });
  }

  createSessionExpiry(SessionExpry, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/settings/setSessionTimeOut`, SessionExpry).subscribe((addResult: any) => {
      if (addResult.Error){
        this.errorSnack();
      }
      else{
        this.successsSnackSession();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }
  successsSnackSession() {
    this.rateForYear.open(`The session time out was successfully set.` , 'OK', {
      duration: 5000,
    });
  }
}
