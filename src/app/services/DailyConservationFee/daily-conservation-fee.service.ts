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
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateDailyConservationFee(DailyConservationFee, link){
    this.http.post(`${link}/api/dailyConservationFee/createDailyConservationFee`, DailyConservationFee).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addDailyConservationFeeUnsuccessfulDialog = this.dialog.open(AddDailyConservationFeeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addDailyConservationFeeSuccessfulDialog = this.dialog.open(AddDailyConservationFeeSuccessfulComponent);
        this.refresh.next();
      }
    });
  }

  ReadDailyConservationFee(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/dailyConservationFee/getDailyConservationFee`, user);
  }

  UpdateDailyConservationFee(DailyConservationFee, link){
    this.http.post(`${link}/api/dailyConservationFee/updateDailyConservation`, DailyConservationFee).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateDailyConservationFeeUnsuccessfulDialog = this.dialog.open(UpdateDailyConservationFeeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateDailyConservationFeeSuccessfulDialog = this.dialog.open(UpdateDailyConservationFeeSuccessfulComponent);
        this.refresh.next();      }
    });
  }

  DeleteDailyConservationFee(user, link, ConservationID){
    this.http.post(`${link}/api/dailyConservationFee/deleteDailyConservationFee?dailyConservationFeeID=${ConservationID}`, user)
    .subscribe((updateResult: any) => {
      if (updateResult.Error){
      localStorage.setItem('user', JSON.stringify(updateResult.user));
      const deleteDailyConservationFeeUnsuccessfulDialog = this.dialog.open(DeleteDailyConservationFeeUnsuccessfulComponent);
      this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const deleteDailyConservationFeeSuccessfulDialog = this.dialog.open(DeleteDailyConservationFeeSuccessfulComponent);
        this.refresh.next();
      }
    });
  }

  GetRegions(link){
    return this.http.get(`${link}/api/dailyConservationFee/getRegions`);
  }
}
