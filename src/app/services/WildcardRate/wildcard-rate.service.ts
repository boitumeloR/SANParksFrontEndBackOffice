import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {DecimalPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {AddWildcardRateSuccessfulComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-successful/add-wildcard-rate-successful.component';
import {AddWildcardRateUnsuccessfulComponent} from 'src/app/modals/wildcard-rate/add-wildcard-rate-unsuccessful/add-wildcard-rate-unsuccessful.component';
import {UpdateWildcardRateSuccessfulComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate-successful/update-wildcard-rate-successful.component';
import {UpdateWildcardRateUnsuccessfulComponent} from 'src/app/modals/wildcard-rate/update-wildcard-rate-unsuccessful/update-wildcard-rate-unsuccessful.component';
import { DeleteWildcardRateSuccessfulComponent } from 'src/app/modals/wildcard-rate/delete-wildcard-rate-successful/delete-wildcard-rate-successful.component';
import { DeleteWildcardRateUnsuccessfulComponent } from 'src/app/modals/wildcard-rate/delete-wildcard-rate-unsuccessful/delete-wildcard-rate-unsuccessful.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface WildcardRate {
  WildcardRateID: number;
  WildcardClusterID: number;
  WildcardCategoryID: number;
  RateAmount: DecimalPipe;
  DateEffective: Date;
}

@Injectable({
  providedIn: 'root'
})
export class WildcardRateService {

  constructor(private http: HttpClient, private dialog: MatDialog,
              private router: Router, private rateForYear: MatSnackBar) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  serverDownSnack() {
    this.rateForYear.open('Our servers are currently unreachable. Please try again later.', 'OK', {
      duration: 3500,
    });
  }

  CreateWildcardRate(WildcardRate, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/wildcardRate/createWildcardRate`, WildcardRate).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addWildcardRateUnsuccessfulDialog = this.dialog.open(AddWildcardRateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.RateForYearExists){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        this.rateExistsError(WildcardRate.DateEffective);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addWildcardRateSuccessfulDialog = this.dialog.open(AddWildcardRateSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  rateExistsError(year) {
    this.rateForYear.open(`A wildcard rate already exists for this category and cluster in the year ${year}.` , 'OK', {
      duration: 5000,
    });
  }

  ReadWildcardRate(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/wildcardRate/getwildcardRate`, user);
  }

  UpdateWildcardRate(WildcardRate, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/wildcardRate/updateWildcardRate`, WildcardRate).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateWildcardRateUnsuccessfulDialog = this.dialog.open(UpdateWildcardRateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.RateForYearExists){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        this.rateExistsError(WildcardRate.DateEffective);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateWildcardRateSuccessfulDialog = this.dialog.open(UpdateWildcardRateSuccessfulComponent);
        this.refresh.next();
      }
      displaySpinner.close();
    },
    (error: HttpErrorResponse) => {
      displaySpinner.close();
      this.serverDownSnack();
    });
  }

  DeleteWildcardRate(user, WildcardRateID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    return this.http.post(`${link}/api/wildcardRate/deleteWildcardRate?wildcardRateID=${WildcardRateID}`, user)
    .subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteWildcardRateUnsuccessfulDialog = this.dialog.open(DeleteWildcardRateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteWildcardRateSuccessfulDialog = this.dialog.open(DeleteWildcardRateSuccessfulComponent);
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
