import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationaddedComponent } from './accommodationadded.component';

describe('AccommodationaddedComponent', () => {
  let component: AccommodationaddedComponent;
  let fixture: ComponentFixture<AccommodationaddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccommodationaddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccommodationaddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
