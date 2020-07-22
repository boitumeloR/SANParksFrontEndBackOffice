import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateTimeComponent } from './add-park-gate-time.component';

describe('AddParkGateTimeComponent', () => {
  let component: AddParkGateTimeComponent;
  let fixture: ComponentFixture<AddParkGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
