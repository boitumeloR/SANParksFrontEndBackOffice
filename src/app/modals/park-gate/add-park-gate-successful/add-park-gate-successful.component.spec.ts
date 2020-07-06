import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateSuccessfulComponent } from './add-park-gate-successful.component';

describe('AddParkGateSuccessfulComponent', () => {
  let component: AddParkGateSuccessfulComponent;
  let fixture: ComponentFixture<AddParkGateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
