import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitySlotComponent } from './activity-slot.component';

describe('ActivitySlotComponent', () => {
  let component: ActivitySlotComponent;
  let fixture: ComponentFixture<ActivitySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
