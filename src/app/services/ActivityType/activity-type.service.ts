import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';

export interface ActivityType{
  ActivityTypeID: number;
  ActivityTypeDescription: string;
}

export interface ActivityTypeDropDown{
  ActivityTypeID: number;
  ActivityTypeDescription: string;
}


@Injectable({
  providedIn: 'root'
})
export class ActivityTypeService {

  constructor(private global: GlobalService , private http: HttpClient) { }

  createActivityType(ActivityType, link){

  }
  readActivityType(link){

  }
  updateActivityType(updatedActivityType, link){

  }
  deleteActivityType(ActivityTypeID, link){

  }

}
