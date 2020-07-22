import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivitySlotComponent } from './update-activity-slot.component';

describe('UpdateActivitySlotComponent', () => {
  let component: UpdateActivitySlotComponent;
  let fixture: ComponentFixture<UpdateActivitySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivitySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivitySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
