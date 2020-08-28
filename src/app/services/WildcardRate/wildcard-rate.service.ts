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

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateWildcardRate(WildcardRate, link){
    return this.http.post(`${link}/api/wildcardRate/createWildcardRate`, WildcardRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addWildcardRateUnsuccessfulDialog = this.dialog.open(AddWildcardRateUnsuccessfulComponent);
      }
      else{
        const addWildcardRateSuccessfulDialog = this.dialog.open(AddWildcardRateSuccessfulComponent);
      }
    });
  }

  ReadWildcardRate(link){
    return this.http.get(`${link}/api/wildcardRate/getwildcardRate`);
  }

  UpdateWildcardRate(WildcardRate, link){
    return this.http.post(`${link}/api/wildcardRate/updateWildcardRate`, WildcardRate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateWildcardRateUnsuccessfulDialog = this.dialog.open(UpdateWildcardRateUnsuccessfulComponent);
      }
      else{
        const updateWildcardRateSuccessfulDialog = this.dialog.open(UpdateWildcardRateSuccessfulComponent);
      }
    });
  }

  DeleteWildcardRate(WildcardRateID, link){
    return this.http.delete(`${link}/api/wildcardRate/deleteWildcardRate?wildcardRateID=${WildcardRateID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteWildcardRateUnsuccessfulDialog = this.dialog.open(DeleteWildcardRateUnsuccessfulComponent);
      }
      else{
        const deleteWildcardRateSuccessfulDialog = this.dialog.open(DeleteWildcardRateSuccessfulComponent);
      }
    });
  }
}
