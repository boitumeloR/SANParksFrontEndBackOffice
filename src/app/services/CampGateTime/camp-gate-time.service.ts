import { Injectable, DefaultIterableDiffer } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';
import { DateRange } from '@fullcalendar/core';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddCampGateTimeSuccessfulComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-successful/add-camp-gate-time-successful.component';
import {AddCampGateTimeUnsuccessfulComponent} from 'src/app/modals/camp-gate-time/add-camp-gate-time-unsuccessful/add-camp-gate-time-unsuccessful.component';
import {UpdateCampGateTimeSuccessfulComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-successful/update-camp-gate-time-successful.component';
import {UpdateCampGateTimeUnsuccessfulComponent} from 'src/app/modals/camp-gate-time/update-camp-gate-time-unsuccessful/update-camp-gate-time-unsuccessful.component';
import { DeleteCampGateTimeSuccessfulComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time-successful/delete-camp-gate-time-successful.component';
import { DeleteCampGateTimeUnsuccessfulComponent } from 'src/app/modals/camp-gate-time/delete-camp-gate-time-unsuccessful/delete-camp-gate-time-unsuccessful.component';

export interface CampGateTime{
  CampGateTimeID: number;
  CampID: number;
  ParkID: number;
  ParkName: string;
  CampName: string;
  CampOpenTime: TimeRanges;
  SeasonID: string;
  SeasonName: string;
  CampCloseTime: TimeRanges;
  startDate: DateRange;
  endDate: DateRange;
}

@Injectable({
  providedIn: 'root'
})
export class CampGateTimeService {

  constructor(private dialog: MatDialog , private http: HttpClient ) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  createCampGateTime(CampGateTime, link){
    return this.http.post(`${link}/api/campGateTime/createCampGateTime`, CampGateTime).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addCampGateTimeUnsuccessfulDialog = this.dialog.open(AddCampGateTimeUnsuccessfulComponent);
      }
      else{
        const addCampGateTimeSuccessfulDialog = this.dialog.open(AddCampGateTimeSuccessfulComponent);
      }
    });
  }
  readCampgateTime(link){
    return this.http.get(`${link}/api/campGateTime/getCampGateTime`);
  }
  updateCampGateTime(updatedCampGateTime, link){
    return this.http.post(`${link}/api/campGateTime/updateCampGateTime`, updatedCampGateTime).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateCampGateTimeUnsuccessfulDialog = this.dialog.open(UpdateCampGateTimeUnsuccessfulComponent);
      }
      else{
        const updateCampGateTimeSuccessfulDialog = this.dialog.open(UpdateCampGateTimeSuccessfulComponent);
      }
    });
  }
  deleteCampGateTime(CampGateTimeID, link){
    return this.http.delete(`${link}/api/campGateTime/deleteCampGateTime?campGateTimeID=${CampGateTimeID}`).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((deleteResult: any) => {
      if (deleteResult.Error){
        const deleteCampGateTimeUnsuccessfulDialog = this.dialog.open(DeleteCampGateTimeUnsuccessfulComponent);
      }
      else{
        const deleteCampGateTimeSuccessfulDialog = this.dialog.open(DeleteCampGateTimeSuccessfulComponent);
      }
    });
  }
}
