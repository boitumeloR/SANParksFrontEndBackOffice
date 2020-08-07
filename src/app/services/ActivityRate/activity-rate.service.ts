import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface ActivityRate{
  ActivityRateID: number;
  ActivityID: number;
  CampID: number;
  RateTypeID: number;
  AdultRateAmount: number;
  ChildRateAmount: number;
  VehicleAmount: number;
  HutAmount: number;
  PersonAmount: number;
  BikeAmount: number;
  NoBikeAmount: number;
  startDate: Date;
  endDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityRateService {

  constructor(private global: GlobalService , private http: HttpClient) { }

  createActivityRate(ActivityRate, link){

  }
  readActivityRate(link){

  }
  updateActivityRate(updatedActivityRate, link){

  }
  deleteActivityRate(ActivityRateID, link){

  }

}
