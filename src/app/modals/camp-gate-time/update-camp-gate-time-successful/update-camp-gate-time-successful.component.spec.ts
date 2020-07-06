import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampGateTimeSuccessfulComponent } from './update-camp-gate-time-successful.component';

describe('UpdateCampGateTimeSuccessfulComponent', () => {
  let component: UpdateCampGateTimeSuccessfulComponent;
  let fixture: ComponentFixture<UpdateCampGateTimeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampGateTimeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampGateTimeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
