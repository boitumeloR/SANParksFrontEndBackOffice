import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service'

export interface AccommodationTypeAddRate{
  AddRateID: number;
  AccomodationTypeID: number;
  AdultRateAmount: number;
  ChildRateAmount: number;
 DateEffective: Date;
 }

@Injectable({
  providedIn: 'root'
})
export class AccommAddRateService {

  constructor(private global: GlobalService , private http: HttpClient) { }

  createAccommodationTypeAddRate(AccommodationTypeAddRate, link){

  }
  readAccommodationTypeAddRate(link){

  }
  updateAccommodationTypeAddRate(updatedAccommodationTypeAddRate, link){
  }
  deleteAccommodationTypeAddRate(AddRateID, link){

}
}
