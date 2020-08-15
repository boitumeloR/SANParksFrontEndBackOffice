import { Injectable } from '@angular/core';
import {GlobalService} from 'src/app/services/Global/global.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Park {
  ParkID: number;
  ParkName: string;
  ParkLimit: number;
  ParkLatitude: string;
  ParkLongitude: string;
  ParkDescription: string;
}

export interface ParkDropdown {
  ParkID: number;
  ParkName: string;
}

@Injectable({
  providedIn: 'root'
})
export class ParkService {
  constructor(private global: GlobalService, private http: HttpClient) { }


  CreatePark(Park, link){
    return this.http.post(`${link}/api/Park/CreatePark`, Park);
  }

  ReadPark(link): Observable<any>{
    return this.http.get<any>(`${link}/api/Park/getPark`);
  }

  UpdatePark(Park, link){
    return this.http.post(`${link}/api/Park/UpdatePark`, Park);
  }

  DeletePark(ParkID, link){
    return this.http.delete(`${link}/api/Park/DeletePark?parkID=${ParkID}`);
  }
}
