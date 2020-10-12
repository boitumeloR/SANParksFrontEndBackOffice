import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateConfirmationComponent } from './profile-update-confirmation.component';

describe('ProfileUpdateConfirmationComponent', () => {
  let component: ProfileUpdateConfirmationComponent;
  let fixture: ComponentFixture<ProfileUpdateConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUpdateConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUpdateConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
