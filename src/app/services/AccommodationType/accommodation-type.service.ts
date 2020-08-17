import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface AccommodationType{
  AccommodationTypeID: number;
  AccTypeName: string;
  AccTypeDescription: string;
  NumBeds: number;
  NumBaths: number;
  AdultLimit: number;
 ChildLimit: number;
}

export interface AccommodationTypeDropDown{
  AccommodationTypeID: number;
  AccTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccommodationTypeService {

  constructor(private global: GlobalService , private http: HttpClient ) { }

  createAccommodationType(AccommodationType, link){

  }
  readAccommodationType(link){

  }
  updateAccommodationType(updatedAccommodationType, link){
  }
  deleteAccommodationType(AccommodationTypeID, link){
    }

}
