import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityRateSuccessfulComponent } from './add-activity-rate-successful.component';

describe('AddActivityRateSuccessfulComponent', () => {
  let component: AddActivityRateSuccessfulComponent;
  let fixture: ComponentFixture<AddActivityRateSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityRateSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityRateSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
