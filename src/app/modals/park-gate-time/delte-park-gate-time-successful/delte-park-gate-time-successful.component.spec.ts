import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelteParkGateTimeSuccessfulComponent } from './delte-park-gate-time-successful.component';

describe('DelteParkGateTimeSuccessfulComponent', () => {
  let component: DelteParkGateTimeSuccessfulComponent;
  let fixture: ComponentFixture<DelteParkGateTimeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelteParkGateTimeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelteParkGateTimeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
