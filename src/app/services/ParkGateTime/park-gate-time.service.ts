import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';

export interface ParkGateTime {
  PTimeID: number;
  ParkGateID: number;
  ParkOpenTime: TimeRanges;
  ParkCloseTime: TimeRanges;
  StartDate: Date;
  EndDate: Date;
}
// SeasonParkGateTime
export interface ParkGateTimeDropDown {
  PTimeID: number;
}

@Injectable({
  providedIn: 'root'
})

export class ParkGateTimeService {

  constructor(private http: HttpClient) { }

  CreateParkGateTime(ParkGateTime, link){

  }

  ReadParkGateTime(link){

  }

  UpdateParkGateTime(ParkGateTime, link){

  }

  DeleteParkGateTime(PTimeID){

  }
}
