import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface Activity{
  ActivityID: number;
  ActivityTypeID: number;
  ActivityDescription: string;
  ActivityMaxCapacity: number;
  AgeMin: number;
  AgeMax: number;
}

export interface ActivityDropDown{
  ActivityID: number;
  ActivityDescription: number;
}

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private global: GlobalService , private http: HttpClient) { }

  createActivity(Activity, link){

  }
  readActivity(link){

  }
  updateActivity(updatedActivity, link){

  }
  deleteActivity(ActivityID, link){

  }

  getActivtyInSpecificCamp(campID, typeID, link){
    return this.http.get(`${link}/api/activity/getActivityForCamp?campID=${campID}&activityTypeID=${typeID}`);
  }
}
