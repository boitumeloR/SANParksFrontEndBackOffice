import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivitySlotUnsuccessfulComponent } from './update-activity-slot-unsuccessful.component';

describe('UpdateActivitySlotUnsuccessfulComponent', () => {
  let component: UpdateActivitySlotUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivitySlotUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivitySlotUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivitySlotUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
