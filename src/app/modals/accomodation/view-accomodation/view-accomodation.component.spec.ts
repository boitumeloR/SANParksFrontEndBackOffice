import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccomodationComponent } from './view-accomodation.component';

describe('ViewAccomodationComponent', () => {
  let component: ViewAccomodationComponent;
  let fixture: ComponentFixture<ViewAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
