import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {AddParkGateSuccessfulComponent} from 'src/app/modals/park-gate/add-park-gate-successful/add-park-gate-successful.component';
import {AddParkGateUnsuccessfulComponent} from 'src/app/modals/park-gate/add-park-gate-unsuccessful/add-park-gate-unsuccessful.component';
import {UpdateParkGateSuccessfulComponent} from 'src/app/modals/park-gate/update-park-gate-successful/update-park-gate-successful.component';
import {UpdateParkGateUnsuccessfulComponent} from 'src/app/modals/park-gate/update-park-gate-unsuccessful/update-park-gate-unsuccessful.component';
import { DeleteParkGateSuccessfulComponent } from 'src/app/modals/park-gate/delete-park-gate-successful/delete-park-gate-successful.component';
import {  DeleteParkGateUnsuccessfulComponent } from 'src/app/modals/park-gate/delete-park-gate-unsuccessful/delete-park-gate-unsuccessful.component';

export interface ParkGate {
  ParkGateID: number;
  ParkID: number;
  ParkName: string;
  ParkGateDescription: string;
  ParkGateMax: number;
  ParkGateLatitude: string;
  ParkGateLongitude: string;
  ParkGateName: string;
}
// ParkGateTime, Distance, DayVisit, CheckPark
export interface ParkGateDropDown {
  ParkGateID: number;
  ParkGateName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParkGateService {

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateParkGate(ParkGate, link){
    this.http.post(`${link}/api/parkGate/createParkGate`, ParkGate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addParkGateUnsuccessfulDialog = this.dialog.open(AddParkGateUnsuccessfulComponent);
      }
      else{
        const addParkGateSuccessfulDialog = this.dialog.open(AddParkGateSuccessfulComponent);
      }
    });
  }

  ReadParkGate(link){
    return this.http.get(`${link}/api/parkGate/getParkGate`);
  }

  UpdateParkGate(ParkGate, link){
    this.http.post(`${link}/api/parkGate/updateParkGate`, ParkGate).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateParkGateUnsuccessfulDialog = this.dialog.open(UpdateParkGateUnsuccessfulComponent);
      }
      else{
        const updateParkGateSuccessfulDialog = this.dialog.open(UpdateParkGateSuccessfulComponent);
      }
    });
  }

  DeleteParkGate(ParkGateID, link){
    this.http.delete(`${link}/api/parkGate/deleteParkGate?parkGateID=${ParkGateID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteParkGateUnsuccessfulDialog = this.dialog.open(DeleteParkGateUnsuccessfulComponent);
      }
      else{
        const deleteParkGateSuccessfulDialog = this.dialog.open(DeleteParkGateSuccessfulComponent);
      }
    });
  }

  GetParkGatesForAPark(parkID, link){
    return this.http.get(`${link}/api/parkGate/getParkGateForPark?parkID=${parkID}`);
  }
}
