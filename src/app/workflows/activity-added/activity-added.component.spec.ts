import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAddedComponent } from './activity-added.component';

describe('ActivityAddedComponent', () => {
  let component: ActivityAddedComponent;
  let fixture: ComponentFixture<ActivityAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
