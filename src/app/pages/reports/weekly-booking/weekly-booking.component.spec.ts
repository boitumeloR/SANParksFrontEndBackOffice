import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBookingComponent } from './weekly-booking.component';

describe('WeeklyBookingComponent', () => {
  let component: WeeklyBookingComponent;
  let fixture: ComponentFixture<WeeklyBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
