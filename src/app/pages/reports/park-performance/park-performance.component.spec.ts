import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkPerformanceComponent } from './park-performance.component';

describe('ParkPerformanceComponent', () => {
  let component: ParkPerformanceComponent;
  let fixture: ComponentFixture<ParkPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
