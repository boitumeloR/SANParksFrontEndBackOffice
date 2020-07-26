import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkGateCountComponent } from './park-gate-count.component';

describe('ParkGateCountComponent', () => {
  let component: ParkGateCountComponent;
  let fixture: ComponentFixture<ParkGateCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkGateCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkGateCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
