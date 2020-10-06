import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeAddedComponent } from './activity-type-added.component';

describe('ActivityTypeAddedComponent', () => {
  let component: ActivityTypeAddedComponent;
  let fixture: ComponentFixture<ActivityTypeAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTypeAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
