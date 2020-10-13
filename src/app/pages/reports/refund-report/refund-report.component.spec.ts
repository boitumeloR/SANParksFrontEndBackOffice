import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundReportComponent } from './refund-report.component';

describe('RefundReportComponent', () => {
  let component: RefundReportComponent;
  let fixture: ComponentFixture<RefundReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
