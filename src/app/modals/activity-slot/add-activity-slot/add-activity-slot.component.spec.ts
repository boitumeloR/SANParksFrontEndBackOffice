import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitySlotComponent } from './add-activity-slot.component';

describe('AddActivitySlotComponent', () => {
  let component: AddActivitySlotComponent;
  let fixture: ComponentFixture<AddActivitySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
