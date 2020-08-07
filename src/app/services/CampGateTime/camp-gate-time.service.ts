import { Injectable, DefaultIterableDiffer } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../Global/global.service';
import { DateRange } from '@fullcalendar/core';


export interface CampGateTime{
  CampGateTimeID: Number;
  CampID: Number;
  CampOpenTime: TimeRanges;
  CampCloseTime: TimeRanges;
  startDate: DateRange;
  endDate: DateRange;
}

@Injectable({
  providedIn: 'root'
})
export class CampGateTimeService {

  constructor(private global: GlobalService ,private http:HttpClient ) { }
  createCampGateTime(CampGateTime, link){

  }
  readCampgateTime(link){

  }
  updateCampGateTime(updatedCampGateTime, link){

  }
  deleteCampGateTime(CampGateTimeID, link){

}
}
