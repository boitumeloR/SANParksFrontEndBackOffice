import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service'

export interface Camp{
  CampID: Int16Array,
  ParkID: Int16Array,
  CampTypeID: Int16Array,
  CampDescription: string,
  CampLocation: string,
  CampName: string
}

export interface CampDropDown{
  CampID: Int16Array,
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
