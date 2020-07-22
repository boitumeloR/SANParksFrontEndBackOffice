import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserRoleComponent } from './delete-user-role.component';

describe('DeleteUserRoleComponent', () => {
  let component: DeleteUserRoleComponent;
  let fixture: ComponentFixture<DeleteUserRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteUserRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
