import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInActivityComponent } from './check-in-activity.component';

describe('CheckInActivityComponent', () => {
  let component: CheckInActivityComponent;
  let fixture: ComponentFixture<CheckInActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
