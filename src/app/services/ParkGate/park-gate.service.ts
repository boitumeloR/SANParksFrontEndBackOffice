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
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateParkGate(ParkGate, link){
    this.http.post(`${link}/api/parkGate/createParkGate`, ParkGate).subscribe((addResult: any) => {
      if (addResult.Error){
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addParkGateUnsuccessfulDialog = this.dialog.open(AddParkGateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (addResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(addResult.user));
        const addParkGateSuccessfulDialog = this.dialog.open(AddParkGateSuccessfulComponent);
        this.refresh.next();
      }
    });
  }

  ReadParkGate(link){
    const user = JSON.parse(localStorage.getItem('user'));
    return this.http.post(`${link}/api/parkGate/getParkGate`, user);
  }

  UpdateParkGate(ParkGate, link){
    this.http.post(`${link}/api/parkGate/updateParkGate`, ParkGate).subscribe((updateResult: any) => {
      if (updateResult.Error){
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateParkGateUnsuccessfulDialog = this.dialog.open(UpdateParkGateUnsuccessfulComponent);
        this.refresh.next();

      }
      else if (updateResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(updateResult.user));
        const updateParkGateSuccessfulDialog = this.dialog.open(UpdateParkGateSuccessfulComponent);
        this.refresh.next();
      }
    });
  }

  DeleteParkGate(user,ParkGateID, link){
    this.http.post(`${link}/api/parkGate/deleteParkGate?parkGateID=${ParkGateID}`, user).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkGateUnsuccessfulDialog = this.dialog.open(DeleteParkGateUnsuccessfulComponent);
        this.refresh.next();
      }
      else if (deleteResult.userLoggedOut){
        localStorage.removeItem('user');
        this.router.navigate(['/Login']);
      }
      else{
        localStorage.setItem('user', JSON.stringify(deleteResult.user));
        const deleteParkGateSuccessfulDialog = this.dialog.open(DeleteParkGateSuccessfulComponent);
        this.refresh.next();
      }
    });
  }

  GetParkGatesForAPark(parkID, link){
    return this.http.get(`${link}/api/parkGate/getParkGateForPark?parkID=${parkID}`);
  }
}
