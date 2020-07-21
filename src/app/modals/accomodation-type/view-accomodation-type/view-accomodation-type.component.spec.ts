import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccomodationTypeComponent } from './view-accomodation-type.component';

describe('ViewAccomodationTypeComponent', () => {
  let component: ViewAccomodationTypeComponent;
  let fixture: ComponentFixture<ViewAccomodationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccomodationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccomodationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
