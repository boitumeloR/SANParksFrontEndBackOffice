import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { Time } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {AddParkGateTimeSuccessfulComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-successful/add-park-gate-time-successful.component';
import {AddParkGateTimeUnsuccessfulComponent} from 'src/app/modals/park-gate-time/add-park-gate-time-unsuccessful/add-park-gate-time-unsuccessful.component';
import {UpdateParkGateTimeSuccessfulComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-successful/update-park-gate-time-successful.component';
import { UpdateParkGateTimeUnsuccessfulComponent} from 'src/app/modals/park-gate-time/update-park-gate-time-unsuccessful/update-park-gate-time-unsuccessful.component';
import { DelteParkGateTimeSuccessfulComponent } from 'src/app/modals/park-gate-time/delte-park-gate-time-successful/delte-park-gate-time-successful.component';
import { DeleteParkGateTimeUnsuccessfulComponent } from 'src/app/modals/park-gate-time/delete-park-gate-time-unsuccessful/delete-park-gate-time-unsuccessful.component';
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

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateParkGateTime(ParkGateTime, link){ 
    this.http.post(`${link}/api/parkGateTime/createParkGateTime`, ParkGateTime).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addParkGateTimeUnsuccessfulDialog = this.dialog.open(AddParkGateTimeUnsuccessfulComponent);
      }
      else{
        const addParkGateTimeSuccessfulDialog = this.dialog.open(AddParkGateTimeSuccessfulComponent);
      }
    });
  }

  ReadParkGateTime(link){
    return this.http.get(`${link}/api/parkGateTime/getParkGateTime`);
  }

  UpdateParkGateTime(ParkGateTime, link){
    this.http.post(`${link}/api/parkGateTime/updateParkGateTime`, ParkGateTime).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateParkGateTimeUnsuccessfulDialog = this.dialog.open(UpdateParkGateTimeUnsuccessfulComponent);
      }
      else{
        const updateParkGateTimeSuccessfulDialog = this.dialog.open(UpdateParkGateTimeSuccessfulComponent);
      }
    });
  }

  DeleteParkGateTime(PTimeID, link){ 
    this.http.delete(`${link}/api/parkGateTime/deleteParkGateTime?parkGateTimeID=${PTimeID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteParkGateTimeUnsuccessfulDialog = this.dialog.open(DeleteParkGateTimeUnsuccessfulComponent);
      }
      else{
        const deleteParkGateTimeSuccessfulDialog = this.dialog.open(DelteParkGateTimeSuccessfulComponent);
      }
    });
  }
}
