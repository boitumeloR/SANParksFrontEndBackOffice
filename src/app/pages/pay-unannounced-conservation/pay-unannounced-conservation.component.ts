import { Component, HostListener, OnInit } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CheckInService } from 'src/app/services/CheckIn/check-in.service';
import { GlobalService } from 'src/app/services/Global/global.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from 'src/app/modals/auxilliary-modals/error-modal/error-modal.component';
import { Booking } from 'src/app/services/Booking/booking.service';
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';
import { QrCodeModalComponent } from 'src/app/modals/qr-code-modal/qr-code-modal.component';

@Component({
  selector: 'app-pay-unannounced-conservation',
  templateUrl: './pay-unannounced-conservation.component.html',
  styleUrls: ['./pay-unannounced-conservation.component.scss']
})
export class PayUnannouncedConservationComponent implements OnInit {


  amount: number;
  booking: Booking;
  handler: any;
  loading = false;
  elements: any;
  card: any;

  stripeTest: FormGroup;
  // optional parameters
  elementsOptions: any = {
    locale: 'en'
  };

  @HostListener('window:popstate' , ['$event'])
  onpopstate(event) {
    this.handler.close();
  }
  constructor(private fb: FormBuilder, private stripeService: StripeService,
              private title: Title, private checkServ: CheckInService,
              private global: GlobalService, private router: Router,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.booking = JSON.parse(localStorage.getItem('unannouncedBooking'));
    this.amount = this.booking.ConservationAmount;
    this.title.setTitle('Pay Conservation Fee');
    this.stripeService.elements(this.elementsOptions)
    .subscribe(elements => {
      this.elements = elements;
      // Only mount the element the first time
      if (!this.card) {
        this.card = this.elements.create('card', {
          iconStyle: 'solid',
          style: {
            base: {
              iconColor: '#c4f0ff',
              color: '#fff',
              fontWeight: 500,
              fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
              fontSize: '16px',
              fontSmoothing: 'antialiased',
              ':-webkit-autofill': {
                color: '#fce883',
              },
              '::placeholder': {
                color: '#87BBFD',
              },
            },
            invalid: {
              iconColor: '#FFC7EE',
              color: '#FFC7EE',
            },
          },
        });
        this.card.mount('#example1-card');
        // registerElements([this.card], 'example1');
      }
    });
  }


  handlePayment() {
    this.loading = true;
    this.stripeService
      .createToken(this.card, {})
      .subscribe(result => {
        if (result) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges

          const token = result.token.id;
          this.booking.paymentToken = token;
          this.booking.Session = JSON.parse(localStorage.getItem('user'));

          this.checkServ.SaveDigitalCheckIn(this.global.GetServer(), this.booking).subscribe(res => {
            this.loading = false;
            if (res.Session == null) {
              this.router.navigateByUrl('Login');
              this.dialog.open(ErrorModalComponent, {
                data: { errorMessage: 'Session Error, login error.'}
              });
            } else {
              localStorage.setItem('user', JSON.stringify(res.Session));
              if (res.Success === true) {
                this.router.navigateByUrl('Home');
                const qr = this.dialog.open(SuccessModalComponent, {
                  data: { successMessage: 'Success! Allow the client in!!.'}
                });

                qr.afterClosed().subscribe(code => {
                  this.dialog.open(QrCodeModalComponent, {
                    data: { BookingID: res.BookingID},
                    disableClose: true
                  });
                });
              } else {
                this.dialog.open(ErrorModalComponent, {
                  data: { errorMessage: res.Message }
                });
              }
            }
          });
        }
      });
    }

}
