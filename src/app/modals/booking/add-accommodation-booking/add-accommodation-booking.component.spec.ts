import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccommodationBookingComponent } from './add-accommodation-booking.component';

describe('AddAccommodationBookingComponent', () => {
  let component: AddAccommodationBookingComponent;
  let fixture: ComponentFixture<AddAccommodationBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccommodationBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccommodationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
