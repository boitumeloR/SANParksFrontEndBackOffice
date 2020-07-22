import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampGateTimeConfirmationComponent } from './update-camp-gate-time-confirmation.component';

describe('UpdateCampGateTimeConfirmationComponent', () => {
  let component: UpdateCampGateTimeConfirmationComponent;
  let fixture: ComponentFixture<UpdateCampGateTimeConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampGateTimeConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampGateTimeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
