import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

export interface DailyConservationFee {
  ConservationID: number;
  ParkID: number;
  RegionID: number;
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

  constructor(private http: HttpClient) { }

  CreateDailyConservationFee(DailyConservationFee, link){

  }

  ReadDailyConservationFee(link){

  }

  UpdateDailyConservationFee(DailyConservationFee, link){

  }

  DeleteDailyConservationFee(ConservationID){

  }
}
