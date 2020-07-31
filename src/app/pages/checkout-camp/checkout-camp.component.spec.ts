import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutCampComponent } from './checkout-camp.component';

describe('CheckoutCampComponent', () => {
  let component: CheckoutCampComponent;
  let fixture: ComponentFixture<CheckoutCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
