import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateUnsuccessfulComponent } from './update-park-gate-unsuccessful.component';

describe('UpdateParkGateUnsuccessfulComponent', () => {
  let component: UpdateParkGateUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateParkGateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
