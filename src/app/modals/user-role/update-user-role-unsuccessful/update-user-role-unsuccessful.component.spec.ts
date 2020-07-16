import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserRoleUnsuccessfulComponent } from './update-user-role-unsuccessful.component';

describe('UpdateUserRoleUnsuccessfulComponent', () => {
  let component: UpdateUserRoleUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateUserRoleUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserRoleUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserRoleUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
