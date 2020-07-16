import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationAddRateUnsuccessfulComponent } from './add-accomodation-add-rate-unsuccessful.component';

describe('AddAccomodationAddRateUnsuccessfulComponent', () => {
  let component: AddAccomodationAddRateUnsuccessfulComponent;
  let fixture: ComponentFixture<AddAccomodationAddRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationAddRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationAddRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
