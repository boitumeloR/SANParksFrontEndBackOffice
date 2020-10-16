import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmModalComponent } from 'src/app/modals/auxilliary-modals/confirm-modal/confirm-modal.component';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { Booking, BookingService, Guest } from 'src/app/services/Booking/booking.service';
import { GlobalService } from 'src/app/services/Global/global.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit, AfterViewInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  payPerc = 0.3;
  totalDue =  0;
  payAmount = 0.3 * this.totalDue;
  bookingData: Booking;
  conservationCheck = 0;
  laterChecked = null;
  upfrontChecked = null;
  WCChecked = null;
  fullConservationAmount = 0;
  invalid = false;
  constructor(private formBuilder: FormBuilder,
              private serv: BookingService, private global: GlobalService,
              private snack: MatSnackBar, private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.bookingData = JSON.parse(localStorage.getItem('itinerary'));
    // map BaseRates
    if (this.bookingData) {
      this.bookingData.AccommodationBookings.map(el => el.BaseRate = 0);
      this.bookingData.AccommodationBookings.map((el) => {
        this.serv.getItineraryAccommodationData(this.global.GetServer(), el).subscribe(res => {
          el.BaseRate = res;
          this.totalDue += el.BaseRate;
          this.payAmount = this.payPerc * this.totalDue;
        });
      });

      this.bookingData.ActivityBookings.map(zz => zz.ActivityRate = 0);
      this.bookingData.ActivityBookings.map((el) => {
        this.serv.getItineraryActivityData(this.global.GetServer(), el).subscribe(res => {
          console.log(res);
          if (res === null) {
            el.ActivityRate = 0;
          } else {
            el.ActivityRate = res;
            this.totalDue += el.ActivityRate;
          }
        });
      });

      console.log(this.bookingData.AccommodationBookings.length);
      if (this.bookingData.AccommodationBookings.length > 0 ) {
        const amount: number =  this.bookingData.AccommodationBookings.map(zz => zz.BaseRate).reduce((index, accum) => index + accum);
        this.totalDue += amount;
        console.log(amount);
      }
      // this.totalDue += this.bookingData.DayVisits.map(zz => zz.Rate).reduce((index, accum) => index + accum);
      if (this.bookingData.ActivityBookings.length > 0) {
        const amountActivity: number =  this.bookingData.ActivityBookings.map(zz => zz.ActivityRate)
        .reduce((index, accum) => index + accum);
        this.totalDue += amountActivity;
      }

      this.payAmount = this.payPerc * this.totalDue;
      console.log(this.payAmount);
    }
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.payAmount = this.payPerc * this.totalDue;
    console.log(this.payAmount);
  }

  initialiseAmounts(): void {
    this.bookingData = JSON.parse(localStorage.getItem('itinerary'));
    // map BaseRates
    if (this.bookingData) {
      this.bookingData.AccommodationBookings.map((el) => {
        this.serv.getItineraryAccommodationData(this.global.GetServer(), el).subscribe(res => {
          el.BaseRate = res;
        });
      });

      this.bookingData.ActivityBookings.map((el) => {
        this.serv.getItineraryActivityData(this.global.GetServer(), el).subscribe(res => {
          if (res === null) {
            el.ActivityRate = 0;
          } else {
            el.ActivityRate = res;
          }
        });
      });

      this.totalDue += this.bookingData.AccommodationBookings.map(zz => zz.BaseRate).reduce((index, accum) => index + accum);
      this.totalDue += this.bookingData.DayVisits.map(zz => zz.Rate).reduce((index, accum) => index + accum);
      this.totalDue += this.bookingData.ActivityBookings.map(zz => zz.ActivityRate).reduce((index, accum) => index + accum);

      this.payAmount = this.payPerc * this.totalDue;
    }
    console.log(this.bookingData.AccommodationBookings);
  }

  openImageModal() {
    console.log('hello');

    const initialState = {
      backdrop: 'static'
    };

    const close = this.dialog.open(ConfirmModalComponent, {
      data: {confirmMessage: 'Are you sure you would like to remove this booking instance ? '}
    });
  }

  getAllGuests(): Guest[] {
    const accommodationGuests: Guest[] = [];
    this.bookingData.AccommodationBookings.forEach(acc => {
      acc.Guests.forEach(guest => accommodationGuests.push(guest));
    });

    const activityGuests: Guest[] = [];
    this.bookingData.ActivityBookings.forEach(act => {
      act.Guests.forEach(guest => activityGuests.push(guest));
    });

    const dayGuests: Guest[] = [];
    this.bookingData.DayVisits.forEach(day => {
      day.Guests.forEach(guest => dayGuests.push(guest));
    });

    const allGuests: Guest[]  = [].concat(accommodationGuests, activityGuests, dayGuests);
    return allGuests;
  }

  LoginModal() {
    const session = JSON.parse(sessionStorage.getItem('session'));
    this.serv.WildcardExists(this.global.GetServer(), session).subscribe(result => {
      if (result.Exists === true) {
        this.snack.open('You will be exempt from paying any conservation fees for this booking.', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000
        });

        if (this.fullConservationAmount > 0 ) {
          this.totalDue -= this.fullConservationAmount;
          this.fullConservationAmount = 0;
        }
        this.payAmount = this.payPerc * this.totalDue;
        this.bookingData.PaidConservationFee = true;
        sessionStorage.setItem('session', JSON.stringify(result.Session));
      } else {
        this.WCChecked = null;
        const snacker = this.snack.open('You do not have a valid wildcard, choose another option', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000
        });

        sessionStorage.setItem('session', JSON.stringify(result.Session));
        snacker.afterDismissed().subscribe(() => {
          location.reload();
        });
      }
    });
  }

  changeWC() {
    const session = JSON.parse(localStorage.getItem('user'));
    const wcObj = {
      Session: session,
      ClientID: this.bookingData.ClientID
    };

    this.serv.WildcardExists(this.global.GetServer(), wcObj).subscribe(result => {
      if (result.Session.Error) {
        const snacker = this.snack.open(result.Session.Error, 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000
        });

        snacker.afterDismissed().subscribe(() => {
          this.router.navigateByUrl('Login');
        });
      } else {
        localStorage.setItem('user', JSON.stringify(result.Session));
      }

      if (result.Exists === true) {
        this.snack.open('You will be exempt from paying any conservation fees for this booking.', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000
        });
        this.bookingData.PaidConservationFee = true;
        if (this.fullConservationAmount > 0 ) {
          this.totalDue -= this.fullConservationAmount;
          this.fullConservationAmount = 0;
          this.payAmount = this.payPerc * this.totalDue;
        }
      } else {
        this.WCChecked = null;
        const snacker = this.snack.open('You do not have a valid wildcard, choose another option', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000
        });

        snacker.afterDismissed().subscribe(() => {
          location.reload();
        });
      }
    }, (error: HttpErrorResponse) => {
      this.snack.open(error.message, 'OK', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000
      });
    });
  }

  changeLater() {
    if (this.fullConservationAmount > 0 ) {
      this.totalDue -= this.fullConservationAmount;
      this.fullConservationAmount = 0;
    }

    this.payAmount = this.payPerc * this.totalDue;
    const guests = this.getAllGuests();
    this.serv.getConservationFees(guests, this.global.GetServer()).subscribe(res => {
      this.fullConservationAmount = res.Amount;
      this.bookingData.ConservationAmount = this.fullConservationAmount;
      this.bookingData.PaidConservationFee = false;

      this.fullConservationAmount = 0;
      localStorage.setItem('itinerary', JSON.stringify(this.bookingData));
      console.log('amounts');
      console.log(this.fullConservationAmount);
    });
  }

  changeUpfront() {
    const guests = this.getAllGuests();
    this.serv.getConservationFees(guests, this.global.GetServer()).subscribe(res => {
      this.fullConservationAmount = res.Amount;
      this.totalDue += this.fullConservationAmount;
      this.bookingData.ConservationAmount = this.fullConservationAmount;
      this.bookingData.PaidConservationFee = true;

      this.payAmount = this.payPerc * this.totalDue;
      localStorage.setItem('itinerary', JSON.stringify(this.bookingData));
      console.log('amounts');
      console.log(this.fullConservationAmount);
    });
  }

  changePaymentAmount() {
    this.payAmount = this.payPerc * 1100;
    console.log(this.payAmount);
  }

  dummy() {
    const session = JSON.parse(sessionStorage.getItem('session'));
    this.serv.dummy(this.global.GetServer(), session).subscribe(res => {
      console.log(res);
      sessionStorage.setItem('session', JSON.stringify(res.Session));
    });
  }

  CancelAll() {
    const clear = this.dialog.open(ConfirmModalComponent, {
      data: { confirmMessage: 'Are you sure you wish to cancel all of your reservations' }
    });

    clear.afterClosed().subscribe(res => {
      if (res) {
        localStorage.removeItem('itinerary');
        location.reload();
      }
    });
  }

  RemoveAccommodationBooking(booking) {
    const clear = this.dialog.open(ConfirmModalComponent, {
      data: { confirmMessage: 'Are you sure you wish to cancel all of your reservations' }
    });

    clear.afterClosed().subscribe(res => {
      if (res) {
        const index = this.bookingData.AccommodationBookings.indexOf(booking);
        this.bookingData.AccommodationBookings.splice(index, 1);
        localStorage.setItem('itinerary', JSON.stringify(this.bookingData));

        if (
          this.bookingData.AccommodationBookings.length === 0 &&
          this.bookingData.ActivityBookings.length === 0 &&
          this.bookingData.DayVisits.length === 0
        ) {
          localStorage.removeItem('itinerary');
        }
        this.initialiseAmounts();
      }
    });
  }

  RemoveAccommodationGuest(acc, guest) {
    const clear = this.dialog.open(ConfirmModalComponent, {
      data: { confirmMessage: 'Are you sure you wish to remove this guest? ' }
    });

    clear.afterClosed().subscribe(res => {
      if (res) {
        const indexGuest = this.bookingData.AccommodationBookings.find(z => z === acc).Guests.indexOf(guest);
        if (this.bookingData.AccommodationBookings.find(z => z === acc).Guests.length > 2) {
          this.bookingData.AccommodationBookings.find(z => z === acc).Guests.splice(indexGuest, 1);
          localStorage.setItem('itinerary', JSON.stringify(this.bookingData));

          this.initialiseAmounts();
        } else {
          this.snack.open('You have the minimum amount of guests for this reservation', 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000
          });
        }
      }
    });
  }

  RemoveActivityBooking(booking) {
    const clear = this.dialog.open(ConfirmModalComponent, {
      data: { confirmMessage: 'Are you sure you wish to cancel this reservation? ' }
    });

    clear.afterClosed().subscribe(res => {
      if (res) {
        const index = this.bookingData.ActivityBookings.indexOf(booking);
        this.bookingData.ActivityBookings.splice(index, 1);
        localStorage.setItem('itinerary', JSON.stringify(this.bookingData));

        if (
          this.bookingData.AccommodationBookings.length === 0 &&
          this.bookingData.ActivityBookings.length === 0 &&
          this.bookingData.DayVisits.length === 0
        ) {
          localStorage.removeItem('itinerary');
        }
        this.initialiseAmounts();
      }
    });
  }

  RemoveActivityGuest(acc, guest) {
    const clear = this.dialog.open(ConfirmModalComponent, {
      data: { confirmMessage: 'Are you sure you wish to cancel this reservation? ' }
    });

    clear.afterClosed().subscribe(res => {
      if (res) {
        const indexGuest = this.bookingData.ActivityBookings.find(z => z === acc).Guests.indexOf(guest);
        if (this.bookingData.ActivityBookings.find(z => z === acc).Guests.length > 2) {
          this.bookingData.ActivityBookings.find(z => z === acc).Guests.splice(indexGuest, 1);
          localStorage.setItem('itinerary', JSON.stringify(this.bookingData));

          this.initialiseAmounts();
        } else {
          this.snack.open('You have the minimum amount of guests for this reservation', 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000
          });
        }
      }
    });
  }

  RemoveDayVisits(booking) {
    const clear = this.dialog.open(ConfirmModalComponent, {
      data: { confirmMessage: 'Are you sure you wish to cancel this reservation? ' }
    });

    clear.afterClosed().subscribe(res => {
      if (res) {
        const index = this.bookingData.DayVisits.indexOf(booking);
        this.bookingData.DayVisits.splice(index, 1);
        localStorage.setItem('itinerary', JSON.stringify(this.bookingData));
        if (
          this.bookingData.AccommodationBookings.length === 0 &&
          this.bookingData.ActivityBookings.length === 0 &&
          this.bookingData.DayVisits.length === 0
        ) {
          localStorage.removeItem('itinerary');
        }
        this.initialiseAmounts();
      }
    });
  }

  RemoveDayVisitGuest(acc, guest) {
    const clear = this.dialog.open(ConfirmModalComponent, {
      data: { confirmMessage: 'Are you sure you wish to cancel this reservation? ' }
    });

    clear.afterClosed().subscribe(res => {
      if (res) {
        const indexGuest = this.bookingData.DayVisits.find(zz => zz === acc).Guests.indexOf(guest);
        if (this.bookingData.DayVisits.find(z => z === acc).Guests.length > 2) {
          this.bookingData.DayVisits.find(z => z === acc).Guests.splice(indexGuest, 1);
          localStorage.setItem('itinerary', JSON.stringify(this.bookingData));

          this.initialiseAmounts();
        } else {
          this.snack.open('You have the minimum amount of guests for this reservation', 'OK', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000
          });
        }
      }
    });
  }

  changeInput() {
    if (this.payAmount < this.payPerc * this.totalDue) {
      this.invalid = true;
      this.snack.open('You cannot pay less than 30%', 'OK', {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        duration: 2000
      });
    } else if (this.payAmount > this.totalDue) {
      this.invalid = true;
      this.snack.open('You cant pay more that the total amount', 'OK', {
        horizontalPosition: 'left',
        verticalPosition: 'bottom',
        duration: 2000
      });
    } else {
      this.invalid = false;
    }
  }

  Checkout() {
    if (this.laterChecked == null &&
       this.upfrontChecked == null &&
       this.WCChecked == null
       ) {
        this.snack.open('Check one of the radio buttons for your conservation fee option.', 'OK', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000
        });
    } else {
      const sess = JSON.parse(localStorage.getItem('user'));
      console.log(this.totalDue);
      if (this.bookingData) {
        if (this.fullConservationAmount === 0 ) {
          this.bookingData.PaidConservationFee = true;
        }
        this.bookingData.ConservationAmount = this.fullConservationAmount;
        this.bookingData.PaymentAmount = 0;
        this.bookingData.TotalAmount = this.totalDue;
        this.bookingData.Session = sess;
        console.log(this.totalDue);
        localStorage.setItem('itinerary', JSON.stringify(this.bookingData));

        this.serv.SaveBooking(this.bookingData, this.global.GetServer()).subscribe(res => {
          if (res.Success) {
            localStorage.setItem('user', JSON.stringify(res.Session));
            this.router.navigateByUrl('Home');
            this.dialog.open(SuccessModalComponent, {
              data: { successMessage: 'Booking successfully saved. This Booking can be paid in the next hour.' }
            });
          } else {
            this.dialog.open(ErrorModalComponent, {
              data: { errorMessage: res.Message }
            });
          }
        });
      }
    }
  }

}
