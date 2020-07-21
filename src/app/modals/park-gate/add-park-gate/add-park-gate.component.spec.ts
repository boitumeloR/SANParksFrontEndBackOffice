import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateComponent } from './add-park-gate.component';

describe('AddParkGateComponent', () => {
  let component: AddParkGateComponent;
  let fixture: ComponentFixture<AddParkGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
