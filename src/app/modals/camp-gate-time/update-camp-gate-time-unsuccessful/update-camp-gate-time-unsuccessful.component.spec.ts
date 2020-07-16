import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampGateTimeUnsuccessfulComponent } from './update-camp-gate-time-unsuccessful.component';

describe('UpdateCampGateTimeUnsuccessfulComponent', () => {
  let component: UpdateCampGateTimeUnsuccessfulComponent;
  let fixture: ComponentFixture<UpdateCampGateTimeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampGateTimeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampGateTimeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
