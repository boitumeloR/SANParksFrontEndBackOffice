import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface AmenityType{
  AmenityTypeID: number;
  AmenityTypeName: string;
}

export interface AmenityTypeDropDown{
  AmenityTypeID: number;
  AmenityTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AmenityTypeService {
  constructor(private global: GlobalService , private http: HttpClient) { }

  createAmenityType(AmenityType, link){

  }
  readAmenityType(link){

  }
  updateAmenityType(updatedAmenityType, link){

  }
  deleteAmenityType(AmenityTypeID, link){

  }

}
