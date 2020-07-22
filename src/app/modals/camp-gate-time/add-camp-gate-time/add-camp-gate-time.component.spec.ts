import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampGateTimeComponent } from './add-camp-gate-time.component';

describe('AddCampGateTimeComponent', () => {
  let component: AddCampGateTimeComponent;
  let fixture: ComponentFixture<AddCampGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCampGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCampGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
