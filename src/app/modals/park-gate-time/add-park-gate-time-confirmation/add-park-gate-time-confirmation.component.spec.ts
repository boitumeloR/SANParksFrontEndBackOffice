import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateTimeConfirmationComponent } from './add-park-gate-time-confirmation.component';

describe('AddParkGateTimeConfirmationComponent', () => {
  let component: AddParkGateTimeConfirmationComponent;
  let fixture: ComponentFixture<AddParkGateTimeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateTimeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateTimeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
