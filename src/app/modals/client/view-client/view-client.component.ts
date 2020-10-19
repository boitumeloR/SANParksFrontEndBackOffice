import { Component, Inject, OnInit } from '@angular/core';
import { UpdateClientComponent} from 'src/app/modals/client/update-client/update-client.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginService } from 'src/app/services/Login/login.service';
import { tap } from 'rxjs/operators';
import { Client } from 'src/app/services/Client/client.service';
import { Booking, BookingService } from 'src/app/services/Booking/booking.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {

  roleID: number;
  client: Client;
  constructor(private dialog: MatDialog, private loginService: LoginService,
              @Inject(MAT_DIALOG_DATA) private data: any, private serv: BookingService,
              private global: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.client = this.data.viewClient;
    this.loginService.UserRoles.pipe( tap(XX => {
      this.roleID = XX as number;
    })).subscribe();
  }

  updateClient(){
    const updateEmployeeDialog = this.dialog.open(UpdateClientComponent, {disableClose: true});
  }

  AddDayVisit() {
    let employee: number;

    this.serv.getBookingEmployee(this.global.GetServer()).subscribe(result => {
      if (result.userLoggedOut) {
        localStorage.removeItem('user');
        this.router.navigateByUrl('Login');
      } else {
        employee = result.EmployeeID;
        localStorage.setItem('user', JSON.stringify(result.Session));

        const booking: Booking =  {
          ClientID: this.client.ClientID,
          BookingID: null,
          EmployeeID: employee,
          paymentToken: null,
          PaymentAmount: null,
          ConservationAmount: null,
          TotalAmount: null,
          PaidConservationFee: false,
          AccommodationBookings: [],
          ActivityBookings: [],
          DayVisits: [],
          Session: null
        };

        localStorage.setItem('dayVisit', JSON.stringify(booking));
        this.router.navigateByUrl('unannouncedCheckIn');
      }
    });
  }

  makeBooking() {
    let employee: number;

    this.serv.getBookingEmployee(this.global.GetServer()).subscribe(result => {
      if (result.userLoggedOut) {
        localStorage.removeItem('user');
        this.router.navigateByUrl('Login');
      } else {
        employee = result.EmployeeID;
        localStorage.setItem('user', JSON.stringify(result.Session));

        const booking: Booking =  {
          ClientID: this.client.ClientID,
          BookingID: null,
          EmployeeID: employee,
          paymentToken: null,
          PaymentAmount: null,
          ConservationAmount: null,
          TotalAmount: null,
          PaidConservationFee: false,
          AccommodationBookings: [],
          ActivityBookings: [],
          DayVisits: [],
          Session: null
        };

        localStorage.setItem('itinerary', JSON.stringify(booking));
        this.router.navigateByUrl('availableResults');
      }
    });
  }
}
