import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserRoleSuccessfulComponent } from './delete-user-role-successful.component';

describe('DeleteUserRoleSuccessfulComponent', () => {
  let component: DeleteUserRoleSuccessfulComponent;
  let fixture: ComponentFixture<DeleteUserRoleSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserRoleSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserRoleSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
