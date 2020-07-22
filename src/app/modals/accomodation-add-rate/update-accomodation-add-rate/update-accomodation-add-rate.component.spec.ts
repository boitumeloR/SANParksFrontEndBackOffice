import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccomodationAddRateComponent } from './update-accomodation-add-rate.component';

describe('UpdateAccomodationAddRateComponent', () => {
  let component: UpdateAccomodationAddRateComponent;
  let fixture: ComponentFixture<UpdateAccomodationAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccomodationAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccomodationAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
