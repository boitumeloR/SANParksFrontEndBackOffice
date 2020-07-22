import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampGateTimeComponent } from './view-camp-gate-time.component';

describe('ViewCampGateTimeComponent', () => {
  let component: ViewCampGateTimeComponent;
  let fixture: ComponentFixture<ViewCampGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCampGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
