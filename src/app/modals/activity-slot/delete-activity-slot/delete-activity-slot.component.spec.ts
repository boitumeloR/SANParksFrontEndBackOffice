import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivitySlotComponent } from './delete-activity-slot.component';

describe('DeleteActivitySlotComponent', () => {
  let component: DeleteActivitySlotComponent;
  let fixture: ComponentFixture<DeleteActivitySlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivitySlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivitySlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
