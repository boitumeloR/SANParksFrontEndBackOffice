import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateTimeUnsuccessfulComponent } from './update-park-gate-time-unsuccessful.component';

describe('UpdateParkGateTimeUnsuccessfulComponent', () => {
  let component: UpdateParkGateTimeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateParkGateTimeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateTimeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateTimeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
