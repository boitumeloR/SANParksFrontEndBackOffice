import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationBaseRateUnsuccessfulComponent } from './update-accomodation-base-rate-unsuccessful.component';

describe('UpdateAccomodationBaseRateUnsuccessfulComponent', () => {
  let component: UpdateAccomodationBaseRateUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationBaseRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationBaseRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationBaseRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
