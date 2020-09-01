import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {AddSeasonSuccessfulComponent} from 'src/app/modals/season/add-season-successful/add-season-successful.component';
import {AddSeasonUnsuccessfulComponent} from 'src/app/modals/season/add-season-unsuccessful/add-season-unsuccessful.component';
import {UpdateSeasonSuccessfulComponent} from 'src/app/modals/season/update-season-successful/update-season-successful.component';
import {UpdateSeasonUnsuccessfulComponent} from 'src/app/modals/season/update-season-unsuccessful/update-season-unsuccessful.component';

export interface Season {
  SeasonID: number;
  SeasonName: string;
  StartDate: Date;
  EndDate: Date;
}
// SeasonDate, SeasonParkGateTime, SeasonCampGateTime, BaseRateSeason
export interface SeasonDropDown {
  SeasonID: number;
  SeasonName: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  private refresh = new Subject<void>();
  get requestReferesh(){
    return this.refresh;
  }

  CreateSeason(Season, link){
    this.http.post(`${link}/api/season/createSeason`, Season).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((addResult: any) => {
      if (addResult.Error){
        const addSeasonUnsuccessfulDialog = this.dialog.open(AddSeasonUnsuccessfulComponent);
      }
      else{
        const addSeasonSuccessfulDialog = this.dialog.open(AddSeasonSuccessfulComponent);
      }
    });
  }

  ReadSeason(link){
    return this.http.get(`${link}/api/season/getSeason`);
  }

  UpdateSeason(Season, link){
    this.http.post(`${link}/api/season/updateSeason`, Season).pipe( tap(
      () => {this.refresh.next(); }
    )).subscribe((updateResult: any) => {
      if (updateResult.Error){
        const updateSeasonUnsuccessfulDialog = this.dialog.open(UpdateSeasonUnsuccessfulComponent);
      }
      else{
        const updateSeasonSuccessfulDialog = this.dialog.open(UpdateSeasonSuccessfulComponent);
      }
    });
  }
}
