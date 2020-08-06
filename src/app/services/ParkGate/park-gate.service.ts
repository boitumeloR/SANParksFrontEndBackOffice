import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface ParkGate {
  ParkGateID: number,
  ParkID: number,
  ParkGateDescription: string,
  ParkGateMax: number,
  ParkGateLocation: string,
  ParkGateName: string, 
}
//ParkGateTime, Distance, DayVisit, CheckPark
export interface ParkGateDropDown {
  ParkGateID: number,
  ParkGateName: string, 
}

@Injectable({
  providedIn: 'root'
})
export class ParkGateService {

  constructor(private http: HttpClient) { }

  CreateParkGate(ParkGate, link){

  }

  ReadParkGate(link){

  }

  UpdateParkGate(ParkGate, link){

  }

  DeleteParkGate(ParkGateID){

  }
}
