import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimeOutComponent } from './user-time-out.component';

describe('UserTimeOutComponent', () => {
  let component: UserTimeOutComponent;
  let fixture: ComponentFixture<UserTimeOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimeOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
