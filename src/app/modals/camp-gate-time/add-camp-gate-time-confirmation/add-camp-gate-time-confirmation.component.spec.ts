import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampGateTimeConfirmationComponent } from './add-camp-gate-time-confirmation.component';

describe('AddCampGateTimeConfirmationComponent', () => {
  let component: AddCampGateTimeConfirmationComponent;
  let fixture: ComponentFixture<AddCampGateTimeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampGateTimeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampGateTimeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
