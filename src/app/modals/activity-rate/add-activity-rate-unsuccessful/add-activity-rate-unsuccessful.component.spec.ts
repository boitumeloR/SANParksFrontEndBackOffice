import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityRateUnsuccessfulComponent } from './add-activity-rate-unsuccessful.component';

describe('AddActivityRateUnsuccessfulComponent', () => {
  let component: AddActivityRateUnsuccessfulComponent;
  let fixture: ComponentFixture<AddActivityRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
