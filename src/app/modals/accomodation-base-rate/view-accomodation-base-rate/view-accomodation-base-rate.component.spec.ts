import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccomodationBaseRateComponent } from './view-accomodation-base-rate.component';

describe('ViewAccomodationBaseRateComponent', () => {
  let component: ViewAccomodationBaseRateComponent;
  let fixture: ComponentFixture<ViewAccomodationBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccomodationBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccomodationBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
