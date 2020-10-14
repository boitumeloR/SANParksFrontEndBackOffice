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
}
