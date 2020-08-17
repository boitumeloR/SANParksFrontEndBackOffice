import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  CreateSeason(Season, link){

  }

  ReadSeason(link){

  }

  UpdateSeason(Season, link){

  }
}
