import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivityTypeComponent } from './view-activity-type.component';

describe('ViewActivityTypeComponent', () => {
  let component: ViewActivityTypeComponent;
  let fixture: ComponentFixture<ViewActivityTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
