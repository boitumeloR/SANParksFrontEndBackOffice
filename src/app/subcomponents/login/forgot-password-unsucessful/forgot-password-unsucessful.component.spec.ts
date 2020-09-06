import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordUnsucessfulComponent } from './forgot-password-unsucessful.component';

describe('ForgotPasswordUnsucessfulComponent', () => {
  let component: ForgotPasswordUnsucessfulComponent;
  let fixture: ComponentFixture<ForgotPasswordUnsucessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordUnsucessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordUnsucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
