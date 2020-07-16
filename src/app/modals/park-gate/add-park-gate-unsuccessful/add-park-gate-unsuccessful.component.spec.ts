import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateUnsuccessfulComponent } from './add-park-gate-unsuccessful.component';

describe('AddParkGateUnsuccessfulComponent', () => {
  let component: AddParkGateUnsuccessfulComponent;
  let fixture: ComponentFixture<AddParkGateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
