import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordSucessfulComponent } from './reset-password-sucessful.component';

describe('ResetPasswordSucessfulComponent', () => {
  let component: ResetPasswordSucessfulComponent;
  let fixture: ComponentFixture<ResetPasswordSucessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordSucessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
