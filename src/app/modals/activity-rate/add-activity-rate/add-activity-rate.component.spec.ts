import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityRateComponent } from './add-activity-rate.component';

describe('AddActivityRateComponent', () => {
  let component: AddActivityRateComponent;
  let fixture: ComponentFixture<AddActivityRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
