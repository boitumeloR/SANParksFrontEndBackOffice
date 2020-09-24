import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient, private rateForYear: MatSnackBar, private router: Router) { }

  CreateActiveDate(Date, link){
    this.http.post(`${link}/api/settings/createActiveDates`, Date).subscribe((addResult: any) => {
      if (addResult.Error){
        this.errorSnack();
      }
      else{
        this.successsSnack();
      }
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
    this.http.post(`${link}/api/settings/setSessionTimeOut`, SessionExpry).subscribe((addResult: any) => {
      if (addResult.Error){
        this.errorSnack();
      }
      else{
        this.successsSnackSession();
      }
    });
  }
  successsSnackSession() {
    this.rateForYear.open(`The session time out was successfully set.` , 'OK', {
      duration: 5000,
    });
  }
}
