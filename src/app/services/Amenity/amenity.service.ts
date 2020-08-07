import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface Amenity{
  PenaltyID: Number,
  AmenityID: Number,
  AmenityTypeID: Number,
  AccommodationTypeID: Number,
  AccommodationID: Number,
  UnitNumber: Number,
  CampID: Number,
  AmenityStatusID: Number,
  AmenityDescription: string
}

@Injectable({
  providedIn: 'root'
})
export class AmenityService {

  constructor(private global: GlobalService ,private http:HttpClient) { }
  createAmenity(Amenity, link){

  }
  readAmenity (link){

  }
  updateAmenity (updatedAmenity, link){  

  }
  deleteAmenity (AmenityID, link){

  }

}
