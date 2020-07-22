import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParkGateComponent } from './view-park-gate.component';

describe('ViewParkGateComponent', () => {
  let component: ViewParkGateComponent;
  let fixture: ComponentFixture<ViewParkGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewParkGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewParkGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
