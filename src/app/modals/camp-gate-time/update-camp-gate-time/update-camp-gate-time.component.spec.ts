import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampGateTimeComponent } from './update-camp-gate-time.component';

describe('UpdateCampGateTimeComponent', () => {
  let component: UpdateCampGateTimeComponent;
  let fixture: ComponentFixture<UpdateCampGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCampGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCampGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
