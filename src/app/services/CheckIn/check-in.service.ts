import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  PreBookedBookings(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/ClientBooking`, data, this.httpOptions);
  }

  PreBookedCheckin(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckInWithBooking`, data, this.httpOptions);
  }

  PayCheckIn(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/PayConservationFee`, data, this.httpOptions);
  }

  GetParkGates(server: string, session: any) {
    return this.http.post<any>(`${server}/api/CheckIn/GetParkGates`, session, this.httpOptions);
  }

  CheckGateAvailability(server: string, gate: number) {
    return this.http.get<any>(`${server}/api/CheckIn/CheckGateAvailability?parkGateID=${gate}`);
  }
}
