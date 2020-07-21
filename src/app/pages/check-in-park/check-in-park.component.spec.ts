import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInParkComponent } from './check-in-park.component';

describe('CheckInParkComponent', () => {
  let component: CheckInParkComponent;
  let fixture: ComponentFixture<CheckInParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
