import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserRoleSuccessfulComponent } from './update-user-role-successful.component';

describe('UpdateUserRoleSuccessfulComponent', () => {
  let component: UpdateUserRoleSuccessfulComponent;
  let fixture: ComponentFixture<UpdateUserRoleSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserRoleSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserRoleSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
