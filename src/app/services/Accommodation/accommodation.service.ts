import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface Accommodation{
  AccommodationID: number;
  UnitNumber: number;
  AccomodationTypeID: number;
  CampID: number;
}


@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private global: GlobalService , private http: HttpClient ) { }

  createAccommodation(Accommodation, link){

  }
  readAccommodation(link){

  }
  updateAccommodation(updatedAccommodation, link){

  }
  deleteAccommodation(AccommodationID, link){
  }

}
