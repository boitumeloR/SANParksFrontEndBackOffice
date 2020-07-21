import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampGateTimeSuccessfulComponent } from './add-camp-gate-time-successful.component';

describe('AddCampGateTimeSuccessfulComponent', () => {
  let component: AddCampGateTimeSuccessfulComponent;
  let fixture: ComponentFixture<AddCampGateTimeSuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampGateTimeSuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampGateTimeSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
