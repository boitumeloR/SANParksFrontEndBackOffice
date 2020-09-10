import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
              private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateWildcardRate(WildcardRate, link){
    return this.http.post(`${link}/api/wildcardRate/createWildcardRate`, WildcardRate).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addWildcardRateUnsuccessfulDialog = this.dialog.open(AddWildcardRateUnsuccessfulComponent);
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
    });
  }

  ReadWildcardRate(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/wildcardRate/getwildcardRate`, user);
  }

  UpdateWildcardRate(WildcardRate, link){
    return this.http.post(`${link}/api/wildcardRate/updateWildcardRate`, WildcardRate).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateWildcardRateUnsuccessfulDialog = this.dialog.open(UpdateWildcardRateUnsuccessfulComponent);
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
    });
  }

  DeleteWildcardRate(user, WildcardRateID, link){
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
    });
  }
}
