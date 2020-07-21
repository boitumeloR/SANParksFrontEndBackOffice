import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserRoleConfirmationComponent } from './update-user-role-confirmation.component';

describe('UpdateUserRoleConfirmationComponent', () => {
  let component: UpdateUserRoleConfirmationComponent;
  let fixture: ComponentFixture<UpdateUserRoleConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserRoleConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserRoleConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
