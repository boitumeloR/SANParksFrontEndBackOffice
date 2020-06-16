import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkGateTimeConfirmationComponent } from './update-park-gate-time-confirmation.component';

describe('UpdateParkGateTimeConfirmationComponent', () => {
  let component: UpdateParkGateTimeConfirmationComponent;
  let fixture: ComponentFixture<UpdateParkGateTimeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkGateTimeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkGateTimeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
