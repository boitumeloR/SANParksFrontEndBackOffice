import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddDailyConservationFeeSuccessfulComponent} from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-successful/add-daily-conservation-fee-successful.component';
import {AddDailyConservationFeeUnsuccessfulComponent} from 'src/app/modals/daily-conservation-fee/add-daily-conservation-fee-unsuccessful/add-daily-conservation-fee-unsuccessful.component';
import {UpdateDailyConservationFeeSuccessfulComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-successful/update-daily-conservation-fee-successful.component';
import {UpdateDailyConservationFeeUnsuccessfulComponent} from 'src/app/modals/daily-conservation-fee/update-daily-conservation-fee-unsuccessful/update-daily-conservation-fee-unsuccessful.component';
import { DeleteDailyConservationFeeSuccessfulComponent } from 'src/app/modals/daily-conservation-fee/delete-daily-conservation-fee-successful/delete-daily-conservation-fee-successful.component';
import { DeleteDailyConservationFeeUnsuccessfulComponent } from 'src/app/modals/daily-conservation-fee/delete-daily-conservation-fee-unsuccessful/delete-daily-conservation-fee-unsuccessful.component';

export interface DailyConservationFee {
  ConservationID: number;
  ParkID: number;
  ParkName: string;
  RegionID: number;
  RegionName: string;
  ChildAmount: DecimalPipe;
  AdultAmount: DecimalPipe;
  DateEffective: Date;
  EndDate: Date;
}
// ParkGate
export interface DailyConservationFeeDropDown {
  ConservationID: number;
}

@Injectable({
  providedIn: 'root'
})
export class DailyConservationFeeService {

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateDailyConservationFee(DailyConservationFee, link){
    this.http.post(`${link}/api/dailyConservationFee/createDailyConservationFee`, DailyConservationFee).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addDailyConservationFeeUnsuccessfulDialog = this.dialog.open(AddDailyConservationFeeUnsuccessfulComponent);
      }
      else{
        const addDailyConservationFeeSuccessfulDialog = this.dialog.open(AddDailyConservationFeeSuccessfulComponent);
      }
    });
  }

  ReadDailyConservationFee(link){
    return this.http.get(`${link}/api/dailyConservationFee/getDailyConservationFee`);
  }

  UpdateDailyConservationFee(DailyConservationFee, link){
    this.http.post(`${link}/api/dailyConservationFee/updateDailyConservation`, DailyConservationFee).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateDailyConservationFeeUnsuccessfulDialog = this.dialog.open(UpdateDailyConservationFeeUnsuccessfulComponent);
      }
      else{
        const updateDailyConservationFeeSuccessfulDialog = this.dialog.open(UpdateDailyConservationFeeSuccessfulComponent);
      }
    });
  }

  DeleteDailyConservationFee(link,ConservationID){
    this.http.delete(`${link}/api/dailyConservationFee/deleteDailyConservationFee?dailyConservationFeeID=${ConservationID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
      const deleteDailyConservationFeeUnsuccessfulDialog = this.dialog.open(DeleteDailyConservationFeeUnsuccessfulComponent);
      }
      else{
        const deleteDailyConservationFeeSuccessfulDialog = this.dialog.open(DeleteDailyConservationFeeSuccessfulComponent);
      }
    });
  }

  GetRegions(link){
    return this.http.get(`${link}/api/dailyConservationFee/getRegions`);
  }
}
