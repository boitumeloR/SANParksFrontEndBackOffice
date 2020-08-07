import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface Activity{
  ActivityID: Number;
  ActivityTypeID: Number;
  ActivityDescription: string;
  ActivityMaxCapacity: Number;
  AgeMin:Number;
  AgeMax:Number;
}

export interface ActivityDropDown{
  ActivityID: Number,
  ActivityDescription: string
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private global: GlobalService ,private http:HttpClient) { }

  createActivity(Activity, link){

  }
  readActivity (link){

  }
  updateActivity(updatedActivity, link){  

  }
  deleteActivity (ActivityID, link){

  }

}
