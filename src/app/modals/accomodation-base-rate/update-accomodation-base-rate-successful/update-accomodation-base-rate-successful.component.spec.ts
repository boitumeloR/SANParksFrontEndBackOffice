import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationBaseRateSuccessfulComponent } from './update-accomodation-base-rate-successful.component';

describe('UpdateAccomodationBaseRateSuccessfulComponent', () => {
  let component: UpdateAccomodationBaseRateSuccessfulComponent;
  let fixture: ComponentFixture<UpdateAccomodationBaseRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationBaseRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationBaseRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
