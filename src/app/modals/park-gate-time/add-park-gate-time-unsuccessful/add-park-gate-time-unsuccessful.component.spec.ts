import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateTimeUnsuccessfulComponent } from './add-park-gate-time-unsuccessful.component';

describe('AddParkGateTimeUnsuccessfulComponent', () => {
  let component: AddParkGateTimeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddParkGateTimeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateTimeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateTimeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
