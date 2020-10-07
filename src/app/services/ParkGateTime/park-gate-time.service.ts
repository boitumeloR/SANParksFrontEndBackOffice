import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { Subject } from 'rxjs';
import { Time } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {AddParkGateTimeSuccessfulComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-successful/add-park-gate-time-successful.component';
import {AddParkGateTimeUnsuccessfulComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-unsuccessful/add-park-gate-time-unsuccessful.component';
import {UpdateParkGateTimeSuccessfulComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-successful/update-park-gate-time-successful.component';
import { UpdateParkGateTimeUnsuccessfulComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-unsuccessful/update-park-gate-time-unsuccessful.component';
import { DelteParkGateTimeSuccessfulComponent } from 'src/app/modals/park-gate-time/delte-park-gate-time-successful/delte-park-gate-time-successful.component';
import { DeleteParkGateTimeUnsuccessfulComponent } from 'src/app/modals/park-gate-time/delete-park-gate-time-unsuccessful/delete-park-gate-time-unsuccessful.component';
import { Router } from '@angular/router';
import {SpinnerComponent} from 'src/app/subcomponents/spinner/spinner.component';
export interface ParkGateTime {
  PTimeID: number;
  ParkGateID: number;
  ParkOpenTime: Time;
  ParkCloseTime: Time;
  StartDate: Date;
  EndDate: Date;
  SeasonID: number;
  SeasonName: string;
  ParkGateName: string;
  ParkName: string;
}
// SeasonParkGateTime
export interface ParkGateTimeDropDown {
  PTimeID: number;
}

@Injectable({
  providedIn: 'root'
})

export class ParkGateTimeService {

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateParkGateTime(ParkGateTime, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/parkGateTime/createParkGateTime`, ParkGateTime).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addParkGateTimeUnsuccessfulDialog = this.dialog.open(AddParkGateTimeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addParkGateTimeSuccessfulDialog = this.dialog.open(AddParkGateTimeSuccessfulComponent);
        this.refresh.next();
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

  ReadParkGateTime(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/parkGateTime/getParkGateTime`, user);
  }

  UpdateParkGateTime(ParkGateTime, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/parkGateTime/updateParkGateTime`, ParkGateTime).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateParkGateTimeUnsuccessfulDialog = this.dialog.open(UpdateParkGateTimeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateParkGateTimeSuccessfulDialog = this.dialog.open(UpdateParkGateTimeSuccessfulComponent);
        this.refresh.next();
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

  DeleteParkGateTime(user ,PTimeID, link){
    const displaySpinner = this.dialog.open(SpinnerComponent, {disableClose: true});
    this.http.post(`${link}/api/parkGateTime/deleteParkGateTime?parkGateTimeID=${PTimeID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkGateTimeUnsuccessfulDialog = this.dialog.open(DeleteParkGateTimeUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkGateTimeSuccessfulDialog = this.dialog.open(DelteParkGateTimeSuccessfulComponent);
        this.refresh.next();
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
}
