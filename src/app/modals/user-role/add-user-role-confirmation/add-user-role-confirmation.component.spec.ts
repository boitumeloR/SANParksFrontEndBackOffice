import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRoleConfirmationComponent } from './add-user-role-confirmation.component';

describe('AddUserRoleConfirmationComponent', () => {
  let component: AddUserRoleConfirmationComponent;
  let fixture: ComponentFixture<AddUserRoleConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserRoleConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserRoleConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
