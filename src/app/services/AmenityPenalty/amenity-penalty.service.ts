import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface AmenityPenalty{
  PenaltyID: Number;
  AmenityID: Number;
  AccommodationTypeID: Number;
  AccommodationID: Number;
  UnitNumber: Number;
  CampID: Number;
  AmenityStatusID: Number;
  AmenityDescription: string;
  AmenityPenaltyAmount: Number;
  DateEffective: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AmenityPenaltyService {

  constructor(private global: GlobalService ,private http:HttpClient) { }

  createAmenityPenalty(AmenityPenalty, link){

  }
  readAmenityPenalty (link){

  }
  updateAmenityPenalty (updatedAmenityPenalty, link){  

  }
  deleteAmenityPenalty (PenaltyID, link){

  }

}
