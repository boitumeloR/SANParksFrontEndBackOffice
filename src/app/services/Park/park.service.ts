import { Injectable } from '@angular/core';
import {GlobalService} from '../global.service';
import { HttpClient } from '@angular/common/http';


export interface Park {
  ParkName: string;
  ParkLocation: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  constructor(private global: GlobalService, private http: HttpClient) { }

  GetWhatever(park, service) {
    return this.http.get(`${service}/api/Booking`);
  }
}