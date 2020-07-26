import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutParkComponent } from './checkout-park.component';

describe('CheckoutParkComponent', () => {
  let component: CheckoutParkComponent;
  let fixture: ComponentFixture<CheckoutParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
