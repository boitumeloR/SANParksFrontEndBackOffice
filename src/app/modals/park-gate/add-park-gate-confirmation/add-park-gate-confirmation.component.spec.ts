import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParkGateConfirmationComponent } from './add-park-gate-confirmation.component';

describe('AddParkGateConfirmationComponent', () => {
  let component: AddParkGateConfirmationComponent;
  let fixture: ComponentFixture<AddParkGateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParkGateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParkGateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
