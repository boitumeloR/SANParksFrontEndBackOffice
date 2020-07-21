import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivitySlotSuccessfulComponent } from './update-activity-slot-successful.component';

describe('UpdateActivitySlotSuccessfulComponent', () => {
  let component: UpdateActivitySlotSuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivitySlotSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivitySlotSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivitySlotSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
