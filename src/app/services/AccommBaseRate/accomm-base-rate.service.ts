import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface AccommodationTypeBaseRate{
  BaseRateID: number;
  AccomodationTypeID: number;
  CampID: number;
  BaseRateAmount: number;
 StartDate: Date;
 EndDate: Date;
 }

@Injectable({
  providedIn: 'root'
})
export class AccommBaseRateService {

  constructor(private global: GlobalService , private http: HttpClient ) { }

  createAccommodationTypeBaseRate(AccommodationTypeBaseRate, link){

  }
  readAccommodationTypeBaseRate(link){

  }
  updateAccommodationTypeBaseRate(updatedAccommodationTypeBaseRate, link){

  }
  deleteAccommodationTypeBaseRate(BaseRateID, link){

}
}
