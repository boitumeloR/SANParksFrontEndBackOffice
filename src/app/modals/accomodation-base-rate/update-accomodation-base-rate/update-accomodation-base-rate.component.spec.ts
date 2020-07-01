import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationBaseRateComponent } from './update-accomodation-base-rate.component';

describe('UpdateAccomodationBaseRateComponent', () => {
  let component: UpdateAccomodationBaseRateComponent;
  let fixture: ComponentFixture<UpdateAccomodationBaseRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationBaseRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationBaseRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
