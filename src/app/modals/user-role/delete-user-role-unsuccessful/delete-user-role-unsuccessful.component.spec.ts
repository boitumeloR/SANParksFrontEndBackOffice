import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserRoleUnsuccessfulComponent } from './delete-user-role-unsuccessful.component';

describe('DeleteUserRoleUnsuccessfulComponent', () => {
  let component: DeleteUserRoleUnsuccessfulComponent;
  let fixture: ComponentFixture<DeleteUserRoleUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserRoleUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserRoleUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
