import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationBaseRateComponent } from './add-accomodation-base-rate.component';

describe('AddAccomodationBaseRateComponent', () => {
  let component: AddAccomodationBaseRateComponent;
  let fixture: ComponentFixture<AddAccomodationBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
