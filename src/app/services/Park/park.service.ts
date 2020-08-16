import { Injectable } from '@angular/core';
import {GlobalService} from 'src/app/services/Global/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable , Subject} from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddParkSuccessfulComponent} from 'src/app/modals/park/add-park-successful/add-park-successful.component';
import {AddParkUnsuccessfulComponent} from 'src/app/modals/park/add-park-unsuccessful/add-park-unsuccessful.component';
import {UpdateParkSuccessfulComponent} from 'src/app/modals/park/update-park-successful/update-park-successful.component';
import {UpdateParkUnsuccessfulComponent} from 'src/app/modals/park/update-park-unsuccessful/update-park-unsuccessful.component';
import { DeleteParkSuccessfulComponent } from 'src/app/modals/park/delete-park-successful/delete-park-successful.component';
import { DeleteParkUnsuccessfulComponent } from 'src/app/modals/park/delete-park-unsuccessful/delete-park-unsuccessful.component';
export interface Park {
  ParkID: number;
  ParkName: string;
  ParkLimit: number;
  ParkLatitude: string;
  ParkLongitude: string;
  ParkDescription: string;
}

export interface ParkDropdown {
  ParkID: number;
  ParkName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  constructor(private global: GlobalService, private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreatePark(Park, link){
    return this.http.post(`${link}/api/Park/CreatePark`, Park).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
       const addParkUnsuccessfulDialog = this.dialog.open(AddParkUnsuccessfulComponent);
      }
      else{
       const addParkSuccessfulDialog = this.dialog.open(AddParkSuccessfulComponent);
      }
    });
  }

  ReadPark(link){
     return this.http.get(`${link}/api/Park/getPark`);
  }

  UpdatePark(Park, link){
    return this.http.post(`${link}/api/Park/UpdatePark`, Park).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
       const updateParkUnsuccessfulDialog = this.dialog.open(UpdateParkUnsuccessfulComponent);
      }
      else{
       const updateParkSuccessfulDialog = this.dialog.open(UpdateParkSuccessfulComponent);
      }
    });
  }

  DeletePark(ParkID, link){
    return this.http.delete(`${link}/api/Park/DeletePark?parkID=${ParkID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteParkUnsuccessfulDialog = this.dialog.open(DeleteParkUnsuccessfulComponent);
      }
      else{
        const deleteParkSuccessfulDialog = this.dialog.open(DeleteParkSuccessfulComponent);
      }
    });
  }
}
