import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivityRateComponent } from './view-activity-rate.component';

describe('ViewActivityRateComponent', () => {
  let component: ViewActivityRateComponent;
  let fixture: ComponentFixture<ViewActivityRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivityRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivityRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
