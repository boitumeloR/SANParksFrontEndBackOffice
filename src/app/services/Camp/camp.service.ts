import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service'

export interface Camp{
  CampID: Number,
  ParkID: Number,
  CampTypeID: Number,
  CampDescription: string,
  CampLocation: string,
  CampName: string
}

export interface CampDropDown{
  CampID: Number,
  CampName: string
}

@Injectable({
  providedIn: 'root'
})
export class CampService {

  constructor(private global: GlobalService ,private http:HttpClient ) { }

  createCamp(camp, link){

  }
  readCamp(link){

  }
  updateCamp(updatedCamp, link){

  }
  deleteCamp(campID, link){

}
}
