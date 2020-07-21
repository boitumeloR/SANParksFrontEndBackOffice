import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampGateTimeUnsuccessfulComponent } from './add-camp-gate-time-unsuccessful.component';

describe('AddCampGateTimeUnsuccessfulComponent', () => {
  let component: AddCampGateTimeUnsuccessfulComponent;
  let fixture: ComponentFixture<AddCampGateTimeUnsuccessfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampGateTimeUnsuccessfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampGateTimeUnsuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
