import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivityRateUnsuccessfulComponent } from './update-activity-rate-unsuccessful.component';

describe('UpdateActivityRateUnsuccessfulComponent', () => {
  let component: UpdateActivityRateUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateActivityRateUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateActivityRateUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivityRateUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
