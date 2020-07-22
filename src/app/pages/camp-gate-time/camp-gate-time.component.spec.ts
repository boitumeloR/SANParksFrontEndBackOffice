import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampGateTimeComponent } from './camp-gate-time.component';

describe('CampGateTimeComponent', () => {
  let component: CampGateTimeComponent;
  let fixture: ComponentFixture<CampGateTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampGateTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampGateTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
