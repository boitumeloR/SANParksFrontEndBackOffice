import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface AmenityPenalty{
  PenaltyID: number;
  AmenityID: number;
  AccommodationTypeID: number;
  AccommodationID: number;
  UnitNumber: number;
  CampID: number;
  AmenityStatusID: number;
  AmenityDescription: string;
  AmenityPenaltyAmount: number;
  DateEffective: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AmenityPenaltyService {

  constructor(private global: GlobalService , private http: HttpClient) { }

  createAmenityPenalty(AmenityPenalty, link){

  }
  readAmenityPenalty(link){

  }
  updateAmenityPenalty(updatedAmenityPenalty, link){

  }
  deleteAmenityPenalty(PenaltyID, link){

  }

}
