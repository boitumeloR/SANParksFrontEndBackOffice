import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateTimeComponent } from './update-park-gate-time.component';

describe('UpdateParkGateTimeComponent', () => {
  let component: UpdateParkGateTimeComponent;
  let fixture: ComponentFixture<UpdateParkGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
