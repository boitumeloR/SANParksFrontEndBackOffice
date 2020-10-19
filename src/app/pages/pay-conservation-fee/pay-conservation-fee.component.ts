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
import { SuccessModalComponent } from 'src/app/modals/auxilliary-modals/success-modal/success-modal.component';

@Component({
  selector: 'app-pay-conservation-fee',
  templateUrl: './pay-conservation-fee.component.html',
  styleUrls: ['./pay-conservation-fee.component.scss']
})
export class PayConservationFeeComponent implements OnInit {

  amount: number;
  bookingID: number;
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
    this.amount = JSON.parse('payAmount').amount;
    this.bookingID = JSON.parse('payAmount').BookingID;
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
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, {})
      .subscribe(result => {
        if (result) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges

          const token = result.token.id;

          const obj = {
            BookingID: this.bookingID,
            Session: JSON.parse(localStorage.getItem('user')),
            paymentToken: token
          };

          this.checkServ.PayCheckIn(this.global.GetServer(), obj).subscribe(res => {
            this.loading = false;
            if (res.Session == null) {
              this.router.navigateByUrl('Login');
              this.dialog.open(ErrorModalComponent, {
                data: { errorMessage: 'Session Error, login error.'}
              });
            } else {
              if (res.Success === true) {
                this.router.navigateByUrl('Home');
                this.dialog.open(SuccessModalComponent, {
                  data: { successMessage: 'Success! Allow the client in!!.'}
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
