import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccomodationAddRateComponent } from './add-accomodation-add-rate.component';

describe('AddAccomodationAddRateComponent', () => {
  let component: AddAccomodationAddRateComponent;
  let fixture: ComponentFixture<AddAccomodationAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAccomodationAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccomodationAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
