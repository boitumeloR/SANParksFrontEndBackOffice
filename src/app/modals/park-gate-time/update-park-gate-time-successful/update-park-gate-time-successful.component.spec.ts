import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateTimeSuccessfulComponent } from './update-park-gate-time-successful.component';

describe('UpdateParkGateTimeSuccessfulComponent', () => {
  let component: UpdateParkGateTimeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateParkGateTimeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateTimeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateTimeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
