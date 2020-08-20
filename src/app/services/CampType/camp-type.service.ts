import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CampType {
  CampTypeID: number;
  CampTypeDescription: string;
  CampTypeName: string;
}
// Camp
export interface CampTypeDropDown {
  CampTypeID: number;
  CampTypeName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampTypeService {

  constructor(private http: HttpClient) { }

  CreateCampType(CampType, link){

  }

  ReadCampType(link){
    return this.http.get(`${link}/api/campType/getCampType`)
  }

  UpdateCampType(CampType, link){

  }

  DeleteCampType(CampTypeID){

  }
}
