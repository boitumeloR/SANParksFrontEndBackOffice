import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateComponent } from './update-park-gate.component';

describe('UpdateParkGateComponent', () => {
  let component: UpdateParkGateComponent;
  let fixture: ComponentFixture<UpdateParkGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
