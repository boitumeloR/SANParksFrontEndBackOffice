import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteActivityRateComponent } from './delete-activity-rate.component';

describe('DeleteActivityRateComponent', () => {
  let component: DeleteActivityRateComponent;
  let fixture: ComponentFixture<DeleteActivityRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteActivityRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteActivityRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
