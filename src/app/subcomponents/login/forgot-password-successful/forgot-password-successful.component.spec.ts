import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordSuccessfulComponent } from './forgot-password-successful.component';

describe('ForgotPasswordSuccessfulComponent', () => {
  let component: ForgotPasswordSuccessfulComponent;
  let fixture: ComponentFixture<ForgotPasswordSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
