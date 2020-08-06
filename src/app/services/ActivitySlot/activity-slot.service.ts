import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
import { DateRange } from '@fullcalendar/core';

export interface ActivitySlot {
  ActivitySlotID: number,
  ActivityID: number,
  CampID: number,
  SlotTime: TimeRanges,
  StartDate: Date,
  EndDate: Date,
}
//used in ActivityDate
export interface ActivitySlotDropDown {
  ActivitySlotID: number,
}

@Injectable({
  providedIn: 'root'
})

export class ActivitySlotService {
  constructor(private http: HttpClient) { }
  CreateActivitySlot(ActivitySlot, link){

  }

  ReadActivitySlot(link){

  }

  UpdateActivitySlot(ActivitySlot, link){

  }

  DeleteActivitySlot(ActivitySlotID){

  }
}
