import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { AccommodationBooking, Booking } from 'src/app/services/Booking/booking.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AddAdultGuestComponent } from '../../guest/add-adult-guest/add-adult-guest.component';
import { AddChildGuestComponent } from '../../guest/add-child-guest/add-child-guest.component';

@Component({
  selector: 'app-add-accommodation-booking',
  templateUrl: './add-accommodation-booking.component.html',
  styleUrls: ['./add-accommodation-booking.component.scss']
})
export class AddAccommodationBookingComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  quantity = 1;
  guests = 1;
  adultGuests = 1;
  totalGuests = 2;

  enterGuest = true;
  config = {
    animated: true,
    backdrop: 'static'
  };
  initialData: any;
  initialDate: Date[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate: Date;
  minDate: Date;

  bookingGuests: any[] = [];
  httpError = false;
  httpMessage = '';

  loader = false;


  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddAccommodationBookingComponent>,
              private serv: AvailabilityService, private global: GlobalService, private router: Router,
              private dialog: MatDialog) {
    const Dates = JSON.parse(localStorage.getItem('Dates'));
    this.minDate = this.parseDate(Dates[0].Date);
    this.maxDate = this.parseDate(Dates[Dates.length - 1].Date);
   }

  ngOnInit(): void {
    console.log(this.initialData);

    const Dates = JSON.parse(localStorage.getItem('Dates'));
    this.bsRangeValue = Dates.map(zz => zz.Date);
    this.bsRangeValue = this.bsRangeValue.map(zz => this.parseDate(zz));
    console.log(this.minDate, this.maxDate);
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  parseDate(input) {
    const parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
  }
  resetHttp() {
    this.httpError = false;
    this.httpMessage = '';
  }
  counter(i: number) {
    return new Array(i);
  }
  confirm() {
    // do stuff
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
  toggleGuest() {
    this.enterGuest = !this.enterGuest;
  }

  addGuest() {
    if (this.totalGuests < this.initialData.MaxCapacity * this.quantity) {
      if ( this.guests < this.initialData.BaseChild * this.quantity) {
        this.guests++;
        this.totalGuests++;
      } else {
        this.httpError = true;
        this.httpMessage = 'Note that additional charges apply for guests over the base children guest allocation for your accommodation';
        this.guests++;
        this.totalGuests++;
      }
    } else {
      this.httpError = true;
      this.httpMessage = `You may only add a total of ${this.totalGuests} guests for your accommodation/s`;
    }
  }
  subtractGuest() {
    if (this.guests !== 0 ) {
      this.guests--;
      this.totalGuests--;
    }
  }

  addAdultGuest() {
    if (this.totalGuests < this.initialData.MaxCapacity * this.quantity) {
      if (this.adultGuests < this.initialData.BaseAdult * this.quantity) {
        this.adultGuests++;
        this.totalGuests++;
      } else {
        this.httpError = true;
        this.httpMessage = 'Note that additional charges apply for guests over the base adult guest allocation for your accommodation';
        this.adultGuests++;
        this.totalGuests++;
      }
    } else {
      this.httpError = true;
      this.httpMessage = `You may only add a total of ${this.totalGuests} guests for your accommodation/s`;
    }

  }
  subtractAdultGuest() {
    if (this.adultGuests > 1) {
      this.adultGuests--;
      this.totalGuests--;
    } else {
      this.httpError = true;
      this.httpMessage = `Add at least one adult`;
    }
  }

  addQuantity() {
    if (this.quantity < Math.min(...this.initialData.Availability.map(zz => zz.AvailableAmount))) {
      this.quantity++;
    }
    else {
      this.httpError = true;
      this.httpMessage = `You may only book up to ${this.quantity} units in the date range chosen`;
    }
  }
  subtractQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
    else {
      this.httpError = true;
      this.httpMessage = `You have to choose at least one unit.`;
    }
  }

  AddAdultGuest() {
    const threshold = this.bookingGuests.filter(zz => zz.GuestAge >= 13).length;
    if (threshold < this.adultGuests) {

      const adult = this.dialog.open(AddAdultGuestComponent, {
        width: '30%',
        disableClose: false
      });

      adult.afterClosed().subscribe((result) => this.bookingGuests.push(result));
    }
  }

  AddChildGuest() {
    const threshold = this.bookingGuests.filter(zz => zz.GuestAge <= 12).length;
    if (threshold < this.guests) {

      const adult = this.dialog.open(AddChildGuestComponent, {
        width: '30%',
        disableClose: false
      });

      adult.afterClosed().subscribe((result) => this.bookingGuests.push(result));
    }
  }

  addToItinerary() {
    const children = this.bookingGuests.filter(zz => zz.GuestAge <= 12).length;
    const adults = this.bookingGuests.filter(zz => zz.GuestAge >= 13).length;
    console.log('here1');
    console.log(children, this.guests);
    console.log(adults, this.adultGuests);
    if (children === this.guests && adults === this.adultGuests) {
      console.log('here2');
      const accItin: AccommodationBooking = {
        AccommodationTypeID: this.initialData.AccommodationTypeID,
        ParkID: this.initialData.ParkID,
        CampID: this.initialData.campID,
        BookingQuantity: this.quantity,
        StartDate: this.bsRangeValue[0],
        EndDate: this.bsRangeValue[this.bsRangeValue.length - 1 ],
        Guests: this.bookingGuests,
        CampName: this.initialData.CampName,
        ParkName: this.initialData.ParkName,
        BaseRate: null,
        AccommodationTypeName: this.initialData.AccommodationTypeName
      };

      console.log(accItin);
      const BookingsItinerary: Booking = JSON.parse(localStorage.getItem('itinerary'));
      if (BookingsItinerary) {
        // there are bookings in the itinerary already
        BookingsItinerary.AccommodationBookings.push(accItin);
        localStorage.setItem('itinerary', JSON.stringify(BookingsItinerary));
        this.router.navigate(['itinerary']);
        this.close();
      } else {
        // if theres no bookings in the itinerary
        const initialItinerary: Booking = {
          ClientID: null,
          BookingID: null,
          ConservationAmount: null,
          PaymentAmount: null,
          TotalAmount: null,
          EmployeeID: null,
          paymentToken: null,
          PaidConservationFee: false,
          AccommodationBookings: [],
          ActivityBookings: [],
          DayVisits: [],
          Session: null
        };

        initialItinerary.AccommodationBookings.push(accItin);
        localStorage.setItem('itinerary', JSON.stringify(initialItinerary));
        this.close();
        this.router.navigate(['itinerary']);
      }
    } else {
      this.httpError = true;
      this.httpMessage = 'Make sure you enter the correct amount of adult and child guests';
    }
  }
}
