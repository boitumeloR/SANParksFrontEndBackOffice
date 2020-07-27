import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecInAccommodationComponent } from './chec-in-accommodation.component';

describe('ChecInAccommodationComponent', () => {
  let component: ChecInAccommodationComponent;
  let fixture: ComponentFixture<ChecInAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecInAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecInAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
