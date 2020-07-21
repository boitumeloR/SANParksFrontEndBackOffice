import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParkGateTimeComponent } from './view-park-gate-time.component';

describe('ViewParkGateTimeComponent', () => {
  let component: ViewParkGateTimeComponent;
  let fixture: ComponentFixture<ViewParkGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParkGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParkGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
