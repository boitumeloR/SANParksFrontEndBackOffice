import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { dateSelectionJoinTransformer } from '@fullcalendar/core';

export interface WildcardRate {
  WildcardRateID: number,
  WildcardClusterID: number,
  WildcardCategoryID: number,
  RateAmount: CurrencyPipe,
  DateEffective: Date,
  
}

@Injectable({
  providedIn: 'root'
})
export class WildcardRateService {

  constructor(private http: HttpClient) { }

  CreateWildcardRate(WildcardRate, link){

  }

  ReadWildcardRate(link){

  }

  UpdateWildcardRate(WildcardRate, link){

  }

  DeleteWildcardRate(WildcardRateID){

  }
}
