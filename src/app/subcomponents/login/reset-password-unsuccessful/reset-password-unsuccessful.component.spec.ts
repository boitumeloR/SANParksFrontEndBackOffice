import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordUnsuccessfulComponent } from './reset-password-unsuccessful.component';

describe('ResetPasswordUnsuccessfulComponent', () => {
  let component: ResetPasswordUnsuccessfulComponent;
  let fixture: ComponentFixture<ResetPasswordUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
