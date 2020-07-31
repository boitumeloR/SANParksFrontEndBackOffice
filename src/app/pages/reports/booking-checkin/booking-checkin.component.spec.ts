import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCheckinComponent } from './booking-checkin.component';

describe('BookingCheckinComponent', () => {
  let component: BookingCheckinComponent;
  let fixture: ComponentFixture<BookingCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
