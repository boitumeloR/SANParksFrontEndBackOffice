import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkGateTimeComponent } from './park-gate-time.component';

describe('ParkGateTimeComponent', () => {
  let component: ParkGateTimeComponent;
  let fixture: ComponentFixture<ParkGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
