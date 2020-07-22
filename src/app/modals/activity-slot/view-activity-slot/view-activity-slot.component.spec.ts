import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActivitySlotComponent } from './view-activity-slot.component';

describe('ViewActivitySlotComponent', () => {
  let component: ViewActivitySlotComponent;
  let fixture: ComponentFixture<ViewActivitySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActivitySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActivitySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
