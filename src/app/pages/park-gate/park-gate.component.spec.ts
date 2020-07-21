import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkGateComponent } from './park-gate.component';

describe('ParkGateComponent', () => {
  let component: ParkGateComponent;
  let fixture: ComponentFixture<ParkGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
