import { Component, OnInit, HostListener } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-card-option',
  templateUrl: './card-option.component.html',
  styleUrls: ['./card-option.component.scss']
})
export class CardOptionComponent implements OnInit {


  amount = 500;
  handler: any;

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
  constructor(private fb: FormBuilder, private stripeService: StripeService, private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Card Option');
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
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card, {})
      .subscribe(result => {
        if (result) {
          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
        }
      });
    }
}
