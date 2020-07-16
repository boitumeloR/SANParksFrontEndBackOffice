import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRoleUnsuccessfulComponent } from './add-user-role-unsuccessful.component';

describe('AddUserRoleUnsuccessfulComponent', () => {
  let component: AddUserRoleUnsuccessfulComponent;
  let fixture: ComponentFixture<AddUserRoleUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserRoleUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserRoleUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
