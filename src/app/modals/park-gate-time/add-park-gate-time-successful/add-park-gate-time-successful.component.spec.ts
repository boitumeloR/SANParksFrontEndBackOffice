import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateTimeSuccessfulComponent } from './add-park-gate-time-successful.component';

describe('AddParkGateTimeSuccessfulComponent', () => {
  let component: AddParkGateTimeSuccessfulComponent;
  let fixture: ComponentFixture<AddParkGateTimeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateTimeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateTimeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});