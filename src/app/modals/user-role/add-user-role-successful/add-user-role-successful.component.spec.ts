import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRoleSuccessfulComponent } from './add-user-role-successful.component';

describe('AddUserRoleSuccessfulComponent', () => {
  let component: AddUserRoleSuccessfulComponent;
  let fixture: ComponentFixture<AddUserRoleSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserRoleSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserRoleSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
