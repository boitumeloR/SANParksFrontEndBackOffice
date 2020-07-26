import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreBookedCheckInComponent } from './pre-booked-check-in.component';

describe('PreBookedCheckInComponent', () => {
  let component: PreBookedCheckInComponent;
  let fixture: ComponentFixture<PreBookedCheckInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreBookedCheckInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreBookedCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
