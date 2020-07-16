import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationBaseRateUnsuccessfulComponent } from './add-accomodation-base-rate-unsuccessful.component';

describe('AddAccomodationBaseRateUnsuccessfulComponent', () => {
  let component: AddAccomodationBaseRateUnsuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationBaseRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationBaseRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationBaseRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
