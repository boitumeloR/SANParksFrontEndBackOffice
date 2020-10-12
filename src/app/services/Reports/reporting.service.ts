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

  GetBookingCheckinReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/BookingVsCheckIn`, filterData, this.httpOptions);
  }

  GetWildcardReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/WildcardMembership`, filterData, this.httpOptions);
  }

  GetClusters(server: string) {
    return this.http.get<any>(`${server}/api/Report/Clusters`);
  }

  SendWeeklyBookingReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/SendWeeklyBooking`, filterData, this.httpOptions);
  }

  SendParkPerformanceReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/SendParkPerformance`, filterData, this.httpOptions);
  }

  SendWildcardReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/SendWildcard`, filterData, this.httpOptions);
  }

  SendBookingCheckinReport(server: string, filterData: any) {
    return this.http.post<any>(`${server}/api/Report/SendBookingCheckIn`, filterData, this.httpOptions);
  }
}
