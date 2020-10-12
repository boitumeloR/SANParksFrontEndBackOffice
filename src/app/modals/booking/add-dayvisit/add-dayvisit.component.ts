import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { DayVisitBooking, Booking } from 'src/app/services/Booking/booking.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AddArbitraryGuestComponent } from '../../guest/add-arbitrary-guest/add-arbitrary-guest.component';

@Component({
  selector: 'app-add-dayvisit',
  templateUrl: './add-dayvisit.component.html',
  styleUrls: ['./add-dayvisit.component.scss']
})
export class AddDayvisitComponent implements OnInit {

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
  maxDate: Date;
  minDate: Date;

  bookingGuests: any[] = [];
  httpError = false;
  httpMessage = '';

  loader = false;

  constructor(private dialogRef: MatDialogRef<AddDayvisitComponent>, private formBuilder: FormBuilder, private dialog: MatDialog,
              private serv: AvailabilityService, private global: GlobalService, private router: Router) {
    const Dates = JSON.parse(localStorage.getItem('Dates'));
    this.minDate = this.parseDate(Dates[0].Date);
    this.maxDate = this.parseDate(Dates[Dates.length - 1].Date);
   }

  ngOnInit(): void {
    console.log(this.initialData);
    const Dates = JSON.parse(localStorage.getItem('Dates'));
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
    if ( this.guests < this.initialData.GateLimit) {
      this.guests++;
      this.totalGuests++;
    } else {
      this.httpError = true;
      this.httpMessage = `You may only add ${this.guests} children for your accommodation/s`;
    }
  }
  subtractGuest() {
    if (this.guests !== 0 ) {
      this.guests--;
      this.totalGuests--;
    }
  }

  addAdultGuest() {
    if (this.adultGuests < this.initialData.GateLimit) {
      this.adultGuests++;
      this.totalGuests++;
    } else {
      this.httpError = true;
      this.httpMessage = `You may only add ${this.adultGuests} adults for your accommodation/s`;
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
    if (this.bookingGuests.length < this.adultGuests) {
      if (this.bookingGuests.length < this.adultGuests) {
        const adult = this.dialog.open(AddArbitraryGuestComponent, {
          disableClose: true
        });

        adult.afterClosed().subscribe((result) => {
          if (result.success) {
            this.bookingGuests.push(result.guest);
          }
        });
      }
    }
  }


  addToItinerary() {
    console.log('here1');
    if (this.bookingGuests.length === this.adultGuests) {
      console.log(this.initialData);
      const accItin: DayVisitBooking = {
        Date: this.bsValue,
        Guests: this.bookingGuests,
        ParkName: this.initialData.ParkName,
        ParkGateID: this.initialData.ParkGateID,
        ParkID: this.initialData.ParkID,
        ParkGateName: this.initialData.ParkGate,
        Rate: 0
      };

      console.log(accItin);
      const BookingsItinerary: Booking = JSON.parse(localStorage.getItem('itinerary'));
      if (BookingsItinerary) {
        // there are bookings in the itinerary already
        BookingsItinerary.DayVisits.push(accItin);
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
          PaidConservationFee: false,
          paymentToken: null,
          AccommodationBookings: [],
          ActivityBookings: [],
          DayVisits: [],
          Session: null
        };

        initialItinerary.DayVisits.push(accItin);
        localStorage.setItem('itinerary', JSON.stringify(initialItinerary));
        this.router.navigate(['itinerary']);
        this.close();
      }
    } else {
      this.httpError = true;
      this.httpMessage = 'Make sure you enter the correct amount of guests';
    }
  }
}
