import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking, Guest } from '../Booking/booking.service';

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

  SearchActivityBooking(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/ActivitySearch`, data, this.httpOptions);
  }

  SearchAccommodationBooking(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/AccommodationSearch`, data, this.httpOptions);
  }


  CheckoutSearch(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckoutSearch`, data, this.httpOptions);
  }

  CheckoutPark(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckoutPark`, data, this.httpOptions);
  }

  PreBookedCheckin(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckInWithBooking`, data, this.httpOptions);
  }

  ActivityCheckIn(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckInActivity`, data, this.httpOptions);
  }

  AccommodationCheckIn(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckInAccommodation`, data, this.httpOptions);
  }

  AccommodationCheckOut(server: string, data: any) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckOutAccommodation`, data, this.httpOptions);
  }

  ActivityTicket(server: string, activityBookDateID: any) {
    return this.http.get<any>(`${server}/api/CheckIn/ActivityTicket?activityBookDateID=${activityBookDateID}`);
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

  ClientHasWildcard(server: string, clientID: number) {
    return this.http.get<boolean>(`${server}/api/CheckIn/ClientHasWildcard?clientID=${clientID}`);
  }

  GetConservationFees(server: string, guests: Guest[]) {
    return this.http.post<number>(`${server}/api/CheckIn/GetConservationFees`, guests, this.httpOptions);
  }

  SavePaidCheckin(server: string, booking: Booking) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckInPaid`, booking, this.httpOptions);
  }

  SaveDigitalCheckIn(server: string, booking: Booking) {
    return this.http.post<any>(`${server}/api/CheckIn/CheckInDigitalPay`, booking, this.httpOptions);
  }

  SaveUnpaid(server: string, booking: Booking) {
    return this.http.post<any>(`${server}/api/CheckIn/SaveUnpaid`, booking, this.httpOptions);
  }
}
