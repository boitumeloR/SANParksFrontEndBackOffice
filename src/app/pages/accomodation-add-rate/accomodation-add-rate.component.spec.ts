import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationAddRateComponent } from './accomodation-add-rate.component';

describe('AccomodationAddRateComponent', () => {
  let component: AccomodationAddRateComponent;
  let fixture: ComponentFixture<AccomodationAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
