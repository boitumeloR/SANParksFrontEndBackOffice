import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationBaseRateSuccessfulComponent } from './add-accomodation-base-rate-successful.component';

describe('AddAccomodationBaseRateSuccessfulComponent', () => {
  let component: AddAccomodationBaseRateSuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationBaseRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationBaseRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationBaseRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
