import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationBaseRateComponent } from './accomodation-base-rate.component';

describe('AccomodationBaseRateComponent', () => {
  let component: AccomodationBaseRateComponent;
  let fixture: ComponentFixture<AccomodationBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
