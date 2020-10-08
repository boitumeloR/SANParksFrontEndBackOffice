import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportingService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  GetWeeklyBookingReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/WeeklyBooking`, filterData, this.httpOptions);
  }

  SendWeeklyBookingReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/SendWeeklyBooking`, filterData, this.httpOptions);
  }
}
