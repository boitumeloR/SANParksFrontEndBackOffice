import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AvailabilityService } from 'src/app/services/Available/availability.service';
import { BookingService, ActivityBooking, Booking } from 'src/app/services/Booking/booking.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { AddArbitraryGuestComponent } from '../../guest/add-arbitrary-guest/add-arbitrary-guest.component';

@Component({
  selector: 'app-add-activity-booking',
  templateUrl: './add-activity-booking.component.html',
  styleUrls: ['./add-activity-booking.component.scss']
})
export class AddActivityBookingComponent implements OnInit {

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

  ActivitySlots: any[];
  selectedSlot: number;

  constructor(private dialogRef: MatDialogRef<AddActivityBookingComponent>,
              private formBuilder: FormBuilder, private dialog: MatDialog,
              private serv: AvailabilityService, private global: GlobalService, private router: Router,
              private bookingServ: BookingService, @Inject(MAT_DIALOG_DATA) private data: any) {
    const Dates = JSON.parse(localStorage.getItem('Dates'));
    this.minDate = this.parseDate(Dates[0].Date);
    this.maxDate = this.parseDate(Dates[Dates.length - 1].Date);
   }

  ngOnInit(): void {
    this.initialData = this.data.actData;
    console.log(this.initialData);
    this.bookingServ.getActivitySlots(this.global.GetServer(), this.initialData.ActivityID, this.initialData.CampID)
    .subscribe(res => {
      this.ActivitySlots = res.ActivitySlots;
    });
    const Dates = JSON.parse(localStorage.getItem('Dates'));
    this.bsValue = this.parseDate(Dates[0].Date);
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
    if (this.guests < Math.min(...this.initialData.Availability.map(zz => zz.AvailableAmount)) ) {
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
    console.log(Math.min(...this.initialData.Availability.map(zz => zz.AvailableAmount)));
    if (this.adultGuests < this.initialData.MaxCapacity) {
      this.adultGuests++;
      this.totalGuests++;
    } else {
      this.httpError = true;
      this.httpMessage = `You may only add ${this.adultGuests} guests for your activity`;
    }

  }
  subtractAdultGuest() {
    if (this.adultGuests > 1) {
      this.adultGuests--;
      this.totalGuests--;
    } else {
      this.httpError = true;
      this.httpMessage = `Add at least one guest`;
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

  addToItinerary() {
    this.loader = true;
    if (this.bookingGuests.length === this.adultGuests) {
      console.log('here2');
      const accItin: ActivityBooking = {
        ParkID: this.initialData.ParkID,
        CampID: this.initialData.campID,
        StartDate: this.bsValue,
        Guests: this.bookingGuests,
        CampName: this.initialData.CampName,
        ParkName: this.initialData.ParkName,
        ActivityRate: null,
        ActivityID: this.initialData.ActivityID,
        ActivityName: this.initialData.ActivityName,
        SlotID: this.selectedSlot // to be dropped down
      };

      console.log(accItin);
      const BookingsItinerary: Booking = JSON.parse(localStorage.getItem('itinerary'));
      if (BookingsItinerary) {
        // there are bookings in the itinerary already
        BookingsItinerary.ActivityBookings.push(accItin);
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

        initialItinerary.ActivityBookings.push(accItin);
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
