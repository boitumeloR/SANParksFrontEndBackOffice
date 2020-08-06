import { Injectable } from '@angular/core';
import {GlobalService} from '../global.service';
import { HttpClient } from '@angular/common/http';


export interface Park {
  ParkID: number,
  ParkName: string,
  ParkLocation: string,
  ParkDescription: string
}

export interface ParkDropdown {
  ParkID: number,
  ParkName: string
}

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  constructor(private global: GlobalService, private http: HttpClient) { }

  GetWhatever(park, service) {
    return this.http.get(`${service}/api/Booking`);
  }

  CreatePark(Park, link){

  }

  ReadPark(link){

  }

  UpdatePark(Park, link){

  }

  DeletePark(ParkID){

  }
}