import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
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
              private dialog: MatDialog) { }

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
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
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
      this.dialog.open(ErrorModalComponent, {
        data: { errorMessage: error.message }
      });
    });
  }
  successsSnackSession() {
    this.rateForYear.open(`The session time out was successfully set.` , 'OK', {
      duration: 5000,
    });
  }
}
