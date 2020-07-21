import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccomodationAddRateComponent } from './view-accomodation-add-rate.component';

describe('ViewAccomodationAddRateComponent', () => {
  let component: ViewAccomodationAddRateComponent;
  let fixture: ComponentFixture<ViewAccomodationAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccomodationAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccomodationAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
