import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface ActivityRate{
  ActivityRateID: Number;
  ActivityID: Number;
  CampID: Number;
  RateTypeID: Number;
  AdultRateAmount:Number;
  ChildRateAmount:Number;
  VehicleAmount: Number;
  HutAmount: Number;
  PersonAmount: Number;
  BikeAmount: Number;
  NoBikeAmount: Number;
  startDate: Date;
  endDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityRateService {

  constructor(private global: GlobalService ,private http:HttpClient) { }

  createActivityRate(ActivityRate, link){

  }
  readActivityRate (link){

  }
  updateActivityRate(updatedActivityRate, link){  

  }
  deleteActivityRate (ActivityRateID, link){

  }

}
